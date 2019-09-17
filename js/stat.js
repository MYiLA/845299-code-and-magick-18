'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = CLOUD_WIDTH / 10.5;
var BAR_GAP = 50;
var textHeight = 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr.length === 0) {
      maxElement = 0;
    }
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgb(255, 255, 255)');
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_GAP + BAR_GAP, CLOUD_GAP + CLOUD_Y + textHeight * 0);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_GAP + BAR_GAP, CLOUD_GAP + CLOUD_Y + textHeight * 1);
  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(238 ,' + Math.random() * 100 + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + CLOUD_GAP + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_GAP + CLOUD_Y + textHeight * 3.5 + BAR_HEIGHT, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(Math.round(times[i]), CLOUD_X + CLOUD_GAP + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_GAP + CLOUD_Y + textHeight * 2.5 + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillText(names[i], CLOUD_X + CLOUD_GAP + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_GAP + CLOUD_Y + textHeight * 4 + BAR_HEIGHT);
  }
};
