// the easy way is to use chained objects, at the time of writing this comment i am not sure if i want to chain objects
// simply not in mood to implement right now the solution that seems most fitting to this challange

var chain = [0];
var index = 0;

$("#r").click(function(){
  $("#result").text("0");
  $("#chain").text("0");
  chain = [0];
  index = 0;
});

function refresh() {
  $("#chain").html("");
  for (var x = 0; x <= index; x++) {
    $("#chain").append(chain[x]);
  }
}

$("#c").click(function(){
  if (index === 0) {
    chain[0] = '0';
  } else if (index > 0) {
    chain.pop();
    index--;
  }
    refresh();
});

$("#dot").click(function(){
  // if not decimal and is number add dot
  refresh();
});

$("#x").click(function(){
  if ($.isNumeric(chain[index])) {
    chain.push('x');
    index++;
    refresh();
  }
});

$("#div").click(function(){
  if ($.isNumeric(chain[index])) {
    chain.push('/');
    index++;
    refresh();
  }
});

$("#plus").click(function(){
  if ($.isNumeric(chain[index])) {
    chain.push('+');
    index++;
    refresh();
  }
});

$("#minus").click(function(){
  if ($.isNumeric(chain[index])) {
    chain.push('-');
    index++;
    refresh();
  }
});

$("#one").click(function(){
 if ($.isNumeric(chain[index])) {
    chain[index] = chain[index]*10 + 1;
    refresh();
  } else {
    chain.push(1);
    index++;
    refresh();
  }
});

$("#two").click(function(){
  if ($.isNumeric(chain[index])) {
    chain[index] = chain[index]*10 + 2;
    refresh();
  } else {
    chain.push(2);
    index++;
    refresh();
  }
});

$("#three").click(function(){
  if ($.isNumeric(chain[index])) {
    chain[index] = chain[index]*10 + 3;
    refresh();
  } else {
    chain.push(3);
    index++;
    refresh();
  }
});

$("#four").click(function(){
  if ($.isNumeric(chain[index])) {
    chain[index] = chain[index]*10 + 4;
    refresh();
  } else {
    chain.push(4);
    index++;
    refresh();
  }
});

$("#five").click(function(){
  if ($.isNumeric(chain[index])) {
    chain[index] = chain[index]*10 + 5;
    refresh();
  } else {
    chain.push(5);
    index++;
    refresh();
  }
});

$("#six").click(function(){
  if ($.isNumeric(chain[index])) {
    chain[index] = chain[index]*10 + 6;
    refresh();
  } else {
    chain.push(6);
    index++;
    refresh();
  }
});

$("#seven").click(function(){
  if ($.isNumeric(chain[index])) {
    chain[index] = chain[index]*10 + 7;
    refresh();
  } else {
    chain.push(7);
    index++;
    refresh();
  }
});

$("#eight").click(function(){
 if ($.isNumeric(chain[index])) {
    chain[index] = chain[index]*10 + 8;
    refresh();
  } else {
    chain.push(8);
    index++;
    refresh();
  }
});

$("#nine").click(function(){
  if ($.isNumeric(chain[index])) {
    chain[index] = chain[index]*10 + 9;
    refresh();
  } else {
    chain.push(9);
    index++;
    refresh();
  }
});

$("#zero").click(function(){
  if ($.isNumeric(chain[index])) {
    chain[index] = chain[index]*10;
    refresh();
  } else {
    chain.push(0);
    index++;
    refresh();
  }
});

function compute() {
  // compute
  if (index % 2 !==0) {
    chain.pop();
  }
  if (index >=2) {
    var i=0;
    while (i < index) {
      switch (chain[i+1]) {
case 'x': chain[0] = chain[i+2]*chain[0];
          break;
case '/': chain[0] = chain[0]/chain[i+2];
          break;
case '+': chain[0] = chain[i+2]+chain[0];
          break;
case '-': chain[0] = chain[0]-chain[i+2];
          break;
      }
      i+=2;
    }
  }
  // if result is 666 play iluminati confirmed + extra conditions for increased frequency
  if ((chain[0] % 3 === 0) || (chain[0]=== 42)|| (chain[0]=== 666)) {
$("#special").append('<audio src="https://www.myinstants.com/media/sounds/x-files-theme-song-copy.mp3" type="audio/mpeg" autoplay></audio>');
  } else {
    $("#special").html(' ');
  }
  //display result
  $("#result").html(chain[0]);
  index = 0;
  var aux = [0];
  chain = aux;
}

$("#equal").click(function(){
    compute();
});
