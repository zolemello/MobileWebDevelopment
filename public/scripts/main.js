var app = new Vue({
  el: '#app',
  data: {
    games: data.matches,
    locations: data.locations,
    matchId: "",
    menu: 'home',
  },
    
  methods: {
      gameDetails: function(id){
          this.matchId = id
          this.menu = 'game-detail'
      }    

    },
    
  components: {
        loc:{
            props: ['location'],
            template: '<iframe :src="location"></iframe>'
        }   
    }
});// fin Vue


$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


// AGREGADO SEGUN LA PLATAFORMA 

'use strict';

var btnLogin    = document.getElementById('btnLogin');
var txtUserName = document.getElementById('txtUserName');
var listeningFirebaseRefs = [];

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

var currentUID;

/**
 * Triggers every time there is a change in the Firebase auth state (i.e. user signed-in or user signed out).
 */
function onAuthStateChanged(user) {

  // We ignore token refresh events.
  if (user && currentUID === user.uid) {
    return;
  }

  if (user) {
    currentUID = user.uid;
    writeUserData(user.uid, user.displayName, user.email, user.photoURL);    
    txtUserName.innerText = user.displayName;
    $("#messages-list > .btn-post-messages").css("display","block");
    
  } else {
    // Set currentUID to null.
    currentUID = null;
    // Display the splash page where you can sign-in.
    // splashPage.style.display = '';    
    txtUserName.innerText = "Guest";
    $("#messages-list > .btn-post-messages").css("display","none");
  }  
}

function showLogin(){    
    if(currentUID == null){
        btnLogin.innerText = "Login In";
    }else{
        btnLogin.innerText = "Login Out";
    }
    showSection('login');
}

// Bindings on load.
window.addEventListener('load', function() {
  // Bind Sign in button.
  btnLogin.addEventListener('click', function() {
    showSection('home');
      if(currentUID == null){          
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);        
      }else{
        firebase.auth().signOut();        
      }
  });

  // Listen for auth state changes
  firebase.auth().onAuthStateChanged(onAuthStateChanged);

   initVueComponents();

   startDatabaseQueries();

   initGeolocation();

}, false);

function getGameScheduleByDate(){
    
    var schedules = [];
    var date = "";
    var position = 0;

    for(var i=0; i < data.games.length; i++){
       if(date != data.games[i].date){         
          
          date = data.games[i].date;
          
          var schedule = {
             "date":date,
             "matches":[]
          };
         
          for(var m=i; m < data.games.length; m++){
            var game = data.games[m];
            if(game.date == schedule.date){
              schedule.matches.push({"position":position++,"teams":game.teams,"location":game.location});
            }            
          }

          schedules.push(schedule);
       }       
    }

    return schedules;
}

function getDataGames(){
   return data;
}

function getGameDetails(index){
    return data.games[index];
}

function getGameMessages(){
  return data.messages;
}

function initVueComponents(){
   new Vue({
    el: '#home',
    data: {
      schedules: getGameScheduleByDate(),
      detail:getGameDetails(0),
    },
    methods:{
      showGameDetails:function(position){
        this.detail = getGameDetails(position)               
      }
    }
  });

  new Vue({
    el: '#messages-item',
    data: {
      messages:getGameMessages()
    },
    methods:{
      showGameMessages:function(){
        this.messages = getGameMessages()               
      }
    }
  });

}

function showDetails(){
  if (window.matchMedia("(orientation: portrait)").matches) {
    $("#game-detail").removeClass("hide-game-detail");
    $("#game-detail").addClass("show-game-detail");
  }
}

function hideDetails(){
  if (window.matchMedia("(orientation: portrait)").matches) {
    $("#game-detail").removeClass("show-game-detail");
    $("#game-detail").addClass("hide-game-detail");
  }
}

function toggleMenu(status){        
    if(status){
        $("body > header > nav").animate({"left":"0%"}, function() {
            $("#btnMenu").css("visibility","hidden");
            $("nav .btnCloseMenu i").css("visibility","visible");             
        }); 
    }else{
        $("nav .btnCloseMenu i").css("visibility","hidden");
        $("#btnMenu").css("visibility","visible");
        $("body > header > nav").animate({"left":"-100%"}, function(){
          $("body > header > nav").css({"left":""});
          $("body > header > nav").addClass("hide-menu");          
        });       
    }        
}

function showSection(idSection){

    if (window.matchMedia("(orientation: portrait)").matches) {
        toggleMenu(false);
    }
    
    $("body > main > section").css("display","none");
    $("#"+idSection).css("display","block");
    var title = $("#"+idSection).attr("data-title");
    $("#"+"current-section").text(title);
}

/**
 * Saves a new post to the Firebase DB.
 */
// [START write_fan_out]
function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
// [END write_fan_out]

/**
 * Creates a new post for the current user.
 */
function newPostForCurrentUser(title, text) {
  // [START single_value_read]
  var userId = firebase.auth().currentUser.uid;
  return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // [START_EXCLUDE]
    return writeNewPost(firebase.auth().currentUser.uid, username,
      firebase.auth().currentUser.photoURL,
      title, text);
    // [END_EXCLUDE]
  });
  // [END single_value_read]
}

/**
 * Starts listening for new posts and populates posts lists.
 */
function startDatabaseQueries() {
  // [START recent_posts_query]
  var recentPostsRef = firebase.database().ref('posts').limitToLast(50);
  // [END recent_posts_query]  

  recentPostsRef.on('child_added', function(data) {
    var author  = data.val().author || 'Anonymous';
    var message = {
         "title":data.val().title,
         "body":data.val().body,
         "autor":author
    };    
    
    var data_messages = getDataGames();
    data_messages.messages.unshift(message);

    console.log("child_added: "+message);    
  });
  recentPostsRef.on('child_changed', function(data) {
    var author = data.val().author || 'Anonymous';
    var info = data.key+", "+data.val().title+", "+data.val().body+", "+author+", "+data.val().uid+", "+data.val().authorPic;
    console.log("child_changed: "+info);   
 });
 recentPostsRef.on('child_removed', function(data) {
    var author = data.val().author || 'Anonymous';
    var info = data.key+", "+data.val().title+", "+data.val().body+", "+author+", "+data.val().uid+", "+data.val().authorPic;
    console.log("child_removed: "+info);   
  });

  // Keep track of all Firebase refs we are listening to.  
  listeningFirebaseRefs.push(recentPostsRef);  
}

function addPostMessage(){
  var title = $("#txtTitlePost").val();
  var body  = $("#txtBodyPost").val();
  var name  = $("#txtNamePost").val();

  if(title.trim() != "" & body.trim() != ""){ 

     $("#txtTitlePost").val("");
     $("#txtBodyPost").val("");
     $("#txtNamePost").val("");

     newPostForCurrentUser(title.trim(), body.trim());

     showSection('messages-list');

  }else{
     alert("Por favor completar los datos");
  }  
}

function initGeolocation() {
  if (navigator && navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position){
      var url = "https://maps.google.com/?ll="+position.coords.latitude+","+position.coords.longitude+"&z=14&t=m&output=embed";
      $('#iframe-map').attr('src',url);
    }, function(){

    });
  } else {
    console.log('Geolocation is not supported');
  }
}
  
// FIN AGREGADO SEGUN LA PLATAFORMA 

