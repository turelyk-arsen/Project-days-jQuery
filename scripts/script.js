const model = $("#goals article");
for (const userData of goalsArray) {
  // 1 - create / clone
  const clone = model.clone();
  // 2 - append
  $("#goals").append(clone);
  // 3 - customize
  clone.find("h2").text(userData.name);
  clone.find("h4").text("$" + userData.goal);
  clone.find("h3").text("$" + userData.current);

  clone.css("background-image", "url(" + userData.picture + ")");

  let length = (userData.current / userData.goal) * 100;
  clone.find("#myBar").width(length + "%");

  // NOT
  // clone.find("article").addClass([userData.riched]);
  // $("article").addClass([userData.riched]);

  // DO well /// I use - for if
  // clone.addClass([userData.riched]);

  // optional add on event to a clone
  clone.on("click", function () {
    // light animation
    $(this).hide(1000);
  });
}
// kill the model
model.remove();

let numTrue = 0;
let numFalse = 0;

for (let i = 0; i < goalsArray.length; i++) {
  if (goalsArray[i].riched == false) {
    numFalse++;
    numTrue = goalsArray.length - numFalse;
    $("#goals article").eq(i).addClass([goalsArray[i].riched]);
  } else {
    $("#goals article").eq(i).addClass([goalsArray[i].riched]);
  }
}

$("#add").text("ADD " + goalsArray.length);
$("#new").text("NEW " + numFalse);
$("#reached").text("REACHED " + numTrue);

// filtering
$("#add").on("click", function () {
  $("button").removeClass("selected");
  $(this).addClass("selected");

  $("article").slideDown("2000");
});

$("#new").on("click", function () {
  $("button").removeClass("selected");
  $(this).addClass("selected");

  $(".true").slideUp("2000");
  $(".false").slideDown("2000");
});

$("#reached").on("click", function () {
  $("button").removeClass("selected");
  $(this).addClass("selected");

  $(".true").slideDown("2000");
  $(".false").slideUp("2000");
});

const modelMessages = $("#messages article");
for (const messagesData of messagesArray) {
  const cloneMessages = modelMessages.clone();
  $("#messages").append(cloneMessages);

  cloneMessages.find("h2").text(messagesData.sender);
  cloneMessages.find("p").text(messagesData.lastMessage);
  cloneMessages.find("span").text(messagesData.date);

  if (messagesData.notSeen) {
    cloneMessages.find("#notSeen").addClass('notSeen');
    cloneMessages.find(".notSeen").text(messagesData.notSeen);
  }

  if (messagesData.picture) {
      cloneMessages.find("img").attr("src", messagesData.picture);
  } else {
    cloneMessages.find("img").remove();
    // cloneMessages.find("article>div").html('<p>' + messagesData.sender.slice(0,3)+'</p>');
    cloneMessages.find('#imageNot').text(messagesData.sender.slice(0,3));
    cloneMessages.find('#imageNot').addClass('imageNot');

          console.log(messagesData.sender.slice(0,3))

  }

  // clone.css("background-image", "url(" + userData.picture + ")");

  // let length = (userData.current / userData.goal) * 100;
  // clone.find("#myBar").width(length + "%");
}
// kill the model
modelMessages.remove();
