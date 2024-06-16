
// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    .from(".two", 0.7, {
      opacity: 0,
      y: 10
    },"+=0.7")
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10
      },
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    },"+=0.7")
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0
    },"+=0.5")
    .from(".fake-btn", 0.4, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      0.8,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=1"
    )
    .from(".idea-1", 0.7, ideaTextTrans,"+=0.8")
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2")
    .from(".idea-2", 0.7, ideaTextTrans,"+=0.8")
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2")
    .from(".idea-3", 0.7, ideaTextTrans,"+=0.8")
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    }, "+=1")
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans, "+=0.8")
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=1"
    )
    .to(
      ".idea-5 .smiley",
      0.7,
      {
        rotation: 90,
        x: 8
      },
      "+=0.8"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.1
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.1,
      "+=1"
    )
    .from(
      ".image-pp",
      0.8,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "+=2"
    )
    .staggerFrom(
      ".wish-hbd span",
      0.8,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.8,
      {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#5dfee3",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 100,
      zIndex: "-1",}, '+=2.5')

    .from(".last", 0.7, ideaTextTrans, "+=0.8")
    .to(".last", 1, ideaTextTransLeave,"+=1.5")

    .from(".last2", 0.7, ideaTextTrans, "+=0.8")
    .to(".last2", 1, ideaTextTransLeave,"+=2.2")

    .from(".last3", 0.7, ideaTextTrans, "+=0.8")
    .to(".last3", 1, ideaTextTransLeave,"+=1.5")

    .to({}, 0.7, {ideaTextTransLeave,
      onComplete: function() {
        TweenMax.to(document.body, 0.5, {
          backgroundColor: "#1e1934",
          onComplete: function() {
            // Callback function
            var preloadLink = document.createElement("link");
            preloadLink.rel = "preload";
            preloadLink.href = "candle.css";
            preloadLink.as = "style";
            document.head.appendChild(preloadLink);
            document.body.classList.add('hidden');
            document.body.innerHTML = `<h1 style="display:none;">
            make a wish and blow the candle!!!</h1>
           <div class="glow" id="glow"></div>
           <div id="candle">
             <div class="stripe"></div>
             <div class="stripe"></div>
             <div class="stripe"></div>
             <div class="stripe"></div>
             <div class="stripe"></div>
             <div id="top">
               <div class="smoke"></div>
               <div class="smoke"></div>
               <div class="smoke"></div>
               <div id="knot"></div>
               <div class="burn" id="flame"></div>
             </div>
           </div>`;
            var link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "candle.css";
            document.head.appendChild(link);
            link.onload = function() {
              document.body.classList.remove('hidden');
              document.querySelector("h1").style.display = 'block'; 
          }

          var jqueryScript = document.createElement("script");
          jqueryScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"; // Ganti dengan path menuju jQuery jika di-hosting secara lokal
          jqueryScript.onload = function() {
          var flame = $("#flame");
          var txt = $("h1");

          flame.on({
              click: function() {
                  flame.removeClass("burn").addClass("puff");
                  $(".smoke").each(function() {
                      $(this).addClass("puff-bubble");
                  });
                  $("#glow").remove();
                  function changeText1() {
                    txt.hide().html("i wish you another happy birthday").fadeIn(300);
                  }

                  function changeText2() {
                      txt.hide().html("I hope that all good things will come to you in the future").fadeIn(400); //
                  }

                  function changeText3() {
                      txt.hide().html("may this year bring you closer to all of your dreams").fadeIn(400);
                  }
                  function changeText4() {
                    txt.hide().html("and thank you for being such a wonderful Tutel (and oshi ofc xD)!!!").fadeIn(400);
                }

                  function changeText5() {
                    txt.hide().html("Happy Birthday once again, Chelly! Enjoy your special day! <br> -Linn").fadeIn(400);
                  }

                  const delay = 5000;
                  setTimeout(changeText1, delay);
                  setTimeout(changeText2, delay*2);
                  setTimeout(changeText3, delay*3);
                  setTimeout(changeText4, delay*4);
                  setTimeout(changeText5, delay*5);

                  $("#candle").animate({
                          opacity: ".5"
                      },
                      100
                  );
                  }
              });
          };
          document.body.appendChild(jqueryScript);
          }
        });
      }
    }, '+=0.8')

};

// Run fetch and animation in sequence
animationTimeline();