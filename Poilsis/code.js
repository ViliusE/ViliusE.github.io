var images = [];

images[0] = ['https://cdn.discordapp.com/attachments/976770229017399376/976770282599612416/unknown.png'];
images[1] = ['https://cdn.discordapp.com/attachments/976770229017399376/976770346986389524/unknown.png'];
images[2] = ['https://cdn.discordapp.com/attachments/976770229017399376/976770378699513896/unknown.png'];
var index = 0;

function change() {
  document.getElementById("mainPhoto").src = images[index];
  if (index == 2) {
    index = 0;
  } else {
    index++;
  }

  setTimeout(change, 5000);
}

window.onload = change();