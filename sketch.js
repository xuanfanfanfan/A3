// function setup() {
//   createCanvas(400, 400);
//   noLoop();
//   background(255);
//   let grid = 10; // Grid size
//   let unit = width / grid;
  
//   for (let i = 0; i < grid; i++) {
//     for (let j = 0; j < grid; j++) {
//       let x = i * unit;
//       let y = j * unit;
//       drawRectangle(x, y, unit);
//     }
//   }
// }

// function drawRectangle(x, y, size) {
//   let colors = ["#FFCC00", "#CC0000", "#3333FF"];
//   let col = floor(random(colors.length));
//   fill(colors[col]);
//   rect(x, y, size, size);
// }



//2
// function setup() {
//   createCanvas(500, 500);
//   background(229, 228, 240); // 设置背景颜色
  
//   let yPosArray = [10, 50, 120, 150, 220, 250, 280, 340, 440];
//   let xPosArray = [10, 30, 70, 140, 300, 330, 420, 440, 480, 500];
  
//   horizontalStreets(yPosArray);
//   verticalStreets(xPosArray);
  
//   // 创建蓝色方块
//   createBlock(50, 80, 30, 30, color(0, 0, 255));
//   createBlock(50, 350, 40, 40, color(0, 0, 255));
//   createBlock(160, 260, 30, 50, color(0, 0, 255));
//   createBlock(380, 160, 50, 100, color(0, 0, 255));
//   createBlock(410, 350, 40, 40, color(0, 0, 255));
  
//   // 创建红色方块
//   createBlock(80, 20, 20, 90, color(255, 0, 0));
//   createBlock(130, 20, 40, 60, color(255, 0, 0));
//   createBlock(80, 270, 60, 40, color(255, 0, 0));
//   createBlock(290, 200, 60, 50, color(255, 0, 0));
//   createBlock(340, 300, 50, 70, color(255, 0, 0));
  
//   // 创建灰色方块
//   createBlock(140, 40, 30, 30, color(169));
//   createBlock(230, 110, 50, 70, color(169));
//   createBlock(230, 370, 30, 50, color(169));
//   createBlock(370, 310, 40, 20, color(169));
//   createBlock(400, 20, 50, 30, color(169));
// }

// function createBlock(x, y, w, h) {
//   rect(x, y, w, h);
// }

// function horizontalStreets(yPosArray) {
//   for (let yPos of yPosArray) {
//     for (let i = 0; i < 50; i++) {
//       let x = i * 10;
//       createBlock(x, yPos, 10, 10);
//     }
//   }
// }

// function verticalStreets(xPosArray) {
//   for (let xPos of xPosArray) {
//     for (let i = 0; i < 50; i++) {
//       let y = i * 10;
//       createBlock(xPos, y, 10, 10);
//     }
//   }
// }

// function moveBlock(block) {
//   block.x = random(500);
//   block.y = random(500);
// }


// 3
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(229, 228, 240); // 设置背景颜色
  
//   let yPosArray = [0,  60, 120, 255, 330, 585, 675];
//   let xPosArray = [0,75, 120, 150, 345, 420,  855, 900,1065];

//   horizontalStreets(yPosArray);
//   verticalStreets(xPosArray);
  
//   // 创建紫色方块
//   createBlock(40, 75, 130, 135, color(150, 150, 220));
//   createBlock(970, 60, 70, 75, color(150, 150, 220));
//   createBlock(420, 585, 50, 90, color(150, 150, 220));
//   createBlock(345, 330, 50, 45, color(150, 150, 220));
  
//   // 创建红色方块
//   createBlock(75, 75, 15, 135, color(255, 70, 70));
//   createBlock(630, 520, 90, 80, color(255, 70, 70));
//   createBlock(165, 600, 185, 75, color(255, 70, 70));
//   createBlock(750, 60, 80, 210, color(255, 70, 70));

//   // 创建蓝色方块
//   createBlock(750, 120, 80, 15, color(50,50,220));
//   createBlock(345, 495, 90, 30, color(50,50,220));
  
//   // 创建灰色方块
//   createBlock(150, 45, 30, 30, color(169));
//   createBlock(255, 120, 60, 70, color(169));
//   createBlock(120, 370, 45, 50, color(169));
//   createBlock(400, 20, 50, 30, color(169));
//   createBlock(900, 330, 60, 90, color(169));
//   createBlock(400, 20, 50, 30, color(169));

//   // 创建灰色方块的中心
//   createBlock(160, 55, 15, 15, color(255,2,0));
//   createBlock(270, 135, 35, 35, color(255,255,0));
//   createBlock(130, 380, 25, 25, color(255,255,0));
//   createBlock(415, 30, 25, 15, color(255,255,0));
//   createBlock(915, 345, 35, 55, color(255,255,0));
// }

// function createBlock(x, y, w, h,c) {
//   fill(c);
//   rect(x, y, w, h);
// }

// function horizontalStreets(yPosArray) {
//   for (let yPos of yPosArray) {
//     for (let i = 0; i < 75; i++) {
//       let x = i * 15;
//       let num = floor(random(101));
//       let c = colourMap(num);
//       createBlock(x, yPos, 15, 15,c);
//     }
//   }
// }

// function verticalStreets(xPosArray) {
//   for (let xPos of xPosArray) {
//     for (let i = 0; i < 60; i++) {
//       let y = i * 15;
//       let num = floor(random(101));
//       let c = colourMap(num);
//       createBlock(xPos, y, 15, 15,c);
//     }
//   }
// }


// function colourMap(num) {
//   if (num >= 0 && num <= 25) {
//     return color(220, 255, 220); // 绿色
//   } else if (num >= 26 && num <= 50) {
//     return color(50,50,220); // 蓝色
//   } else if (num >= 51 && num <= 75) {
//     return color(255, 0, 255); // 粉红色
//   } else if (num >= 76 && num <= 100) {
//     return color(255, 165, 0); // 橙色
//   }
// }

// function moveBlock(block) {
//   block.x = random(500);
//   block.y = random(500);
// }



// 4

// let snowflakes = []; // 存储雪花的数组

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(229, 228, 240); // 设置背景颜色
  
//   let yPosArray = [0,  60, 120, 255, 330, 585, 675];
//   let xPosArray = [0,75, 120, 150, 345, 420,  855, 900,1065];

//   horizontalStreets(yPosArray);
//   verticalStreets(xPosArray);
  
//   // 创建紫色方块
//   createBlock(40, 75, 130, 135, color(150, 150, 220));
//   createBlock(970, 60, 70, 75, color(150, 150, 220));
//   createBlock(420, 585, 50, 90, color(150, 150, 220));
//   createBlock(345, 330, 50, 45, color(150, 150, 220));
  
//   // 创建红色方块
//   createBlock(75, 75, 15, 135, color(255, 70, 70));
//   createBlock(630, 520, 90, 80, color(255, 70, 70));
//   createBlock(165, 600, 185, 75, color(255, 70, 70));
//   createBlock(750, 60, 80, 210, color(255, 70, 70));

//   // 创建蓝色方块
//   createBlock(750, 120, 80, 15, color(50,50,220));
//   createBlock(345, 495, 90, 30, color(50,50,220));
  
//   // 创建灰色方块
//   createBlock(150, 45, 30, 30, color(169));
//   createBlock(255, 120, 60, 70, color(169));
//   createBlock(120, 370, 45, 50, color(169));
//   createBlock(400, 20, 50, 30, color(169));
//   createBlock(900, 330, 60, 90, color(169));
//   createBlock(400, 20, 50, 30, color(169));

//   // 创建灰色方块的中心
//   createBlock(160, 55, 15, 15, color(255,255,0));
//   createBlock(270, 135, 35, 35, color(255,255,0));
//   createBlock(130, 380, 25, 25, color(255,255,0));
//   createBlock(415, 30, 25, 15, color(255,255,0));
//   createBlock(915, 345, 35, 55, color(255,255,0));

// }

// function draw() {
//   for (let i = 0; i < snowflakes.length; i++) {
//     snowflakes[i].fall(); // 让雪花下落
//     snowflakes[i].display(); // 显示雪花
//   }
  
//   // 控制雪花数量
//   if (snowflakes.length < 100) {
//     let snowProbability = map(noise(frameCount * 0.01), 0, 1, 0, 1); // 根据 Perlin noise 控制下雪概率
//     if (snowProbability > 0.5) {
//       let x = random(width);
//       let y = random(-10, -500); // 控制雪花初始位置
//       let snowflake = new Snowflake(x, y); // 创建雪花对象
//       snowflakes.push(snowflake); // 添加到数组中
//     }
//   }
// }

// function createBlock(x, y, w, h,c) {
//   fill(c);
//   rect(x, y, w, h);
// }

// function horizontalStreets(yPosArray) {
//   for (let yPos of yPosArray) {
//     for (let i = 0; i < 75; i++) {
//       let x = i * 15;
//       let num = floor(random(101));
//       let c = colourMap(num);
//       createBlock(x, yPos, 15, 15,c);
//     }
//   }
// }

// function verticalStreets(xPosArray) {
//   for (let xPos of xPosArray) {
//     for (let i = 0; i < 60; i++) {
//       let y = i * 15;
//       let num = floor(random(101));
//       let c = colourMap(num);
//       createBlock(xPos, y, 15, 15,c);
//     }
//   }
// }


// function colourMap(num) {
//   if (num >= 0 && num <= 25) {
//     return color(220, 255, 220); // 绿色
//   } else if (num >= 26 && num <= 50) {
//     return color(50,50,220); // 蓝色
//   } else if (num >= 51 && num <= 75) {
//     return color(255, 0, 255); // 粉红色
//   } else if (num >= 76 && num <= 100) {
//     return color(255, 165, 0); // 橙色
//   }
// }

// function moveBlock(block) {
//   block.x = random(500);
//   block.y = random(500);
// }


// class Snowflake {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.radius = random(2, 8);
//   }

//   fall() {
//     this.y += 0.5; // 控制雪花下落速度
//     if (this.y > height + this.radius) {
//       this.y = random(-10, -500); // 当雪花离开画布时，重新放置在顶部
//     }
//   }

//   display() {
//     fill(255);
//     noStroke();
//     ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
//   }
// }

//5


// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(229, 228, 240); // 设置背景颜色
//   let yPosArray = [0,  60, 120, 255, 330, 585, 675];
//   let xPosArray = [0,75, 120, 150, 345, 420,  855, 900,1065];


//   // 创建花瓣效果图层
//   flowerLayer = createGraphics(width, height);
//   flowerLayer.background(0);
  
//   // 创建紫色方块
//   createBlock(40, 75, 130, 135, color(150, 150, 220));
//   createBlock(970, 60, 70, 75, color(150, 150, 220));
//   createBlock(420, 585, 50, 90, color(150, 150, 220));
//   createBlock(345, 330, 50, 45, color(150, 150, 220));
  
//   // 创建红色方块
//   createBlock(75, 75, 15, 135, color(255, 70, 70));
//   createBlock(630, 520, 90, 80, color(255, 70, 70));
//   createBlock(165, 600, 185, 75, color(255, 70, 70));
//   createBlock(750, 60, 80, 210, color(255, 70, 70));

//   // 创建蓝色方块
//   createBlock(750, 120, 80, 15, color(50,50,220));
//   createBlock(345, 495, 90, 30, color(50,50,220));

//   // 创建灰色方块
//   createBlock(150, 45, 30, 30, color(169));
//   createBlock(255, 120, 60, 70, color(169));
//   createBlock(120, 370, 45, 50, color(169));
//   createBlock(400, 20, 50, 30, color(169));
//   createBlock(900, 330, 60, 90, color(169));
//   createBlock(400, 20, 50, 30, color(169));

//   // 创建灰色方块的中心
//   createBlock(160, 55, 15, 15, color(255,255,0));
//   createBlock(270, 135, 35, 35, color(255,255,0));
//   createBlock(130, 380, 25, 25, color(255,255,0));
//   createBlock(415, 30, 25, 15, color(255,255,0));
//   createBlock(915, 345, 35, 55, color(255,255,0));

// }

// function draw() {
  
//   // 在花瓣效果图层上绘制花瓣
//   flowerLayer.background(0);
//   let f = frameCount;
//   let q = 100;

//   let textSizeValue = 20;
//   flowerLayer.strokeWeight(5);

//   for (let w = -f * 3 % q; w < width + q; w += q) {
//     for (let h = -f * 3 % q; h < height + q; h += q) {
//       for (let x = q; x -= 2; flowerLayer.text("❀", w + x, h + f * noise(d, 9) * 9 % q)) {
//         flowerLayer.textSize(noise(d = x + w + h + f * 6) * textSizeValue);
//         flowerLayer.fill(255);

//       }
//     }
//   }
//   // 将花瓣效果图层叠加到原始画布上
//   image(flowerLayer, 0, 0);
// }

// function createBlock(x, y, w, h, c) {
//   fill(c);
//   rect(x, y, w, h);
// } 

// function verticalStreets(xPosArray) {
//   for (let xPos of xPosArray) {
//     for (let i = 0; i < 60; i++) {
//       let y = i * 15;
//       let num = floor(random(101));
//       let c = colourMap(num);
//       createBlock(xPos, y, 15, 15,c);
//     }
//   }
// }

// function colourMap(num) {
//   if (num >= 0 && num <= 25) {
//     return color(220, 255, 220); // 绿色
//   } else if (num >= 26 && num <= 50) {
//     return color(50,50,220); // 蓝色
//   } else if (num >= 51 && num <= 75) {
//     return color(255, 0, 255); // 粉红色
//   } else if (num >= 76 && num <= 100) {
//     return color(255, 165, 0); // 橙色
//   }
// }








//

let f = 0;

draw = _ => {
  f++ || createCanvas(W = 500, W);
  q = 100;
  s = stroke;
  background(0);

  for (w = -f * 3 % q; w < 600; w += q)
    for (h = -f * 3 % q; h < 600; h += q) {
      for (x = q; x -= 2; text("❀", w + x, h + f * noise(d, 9) * 9 % q))
        textSize(noise(d = x + w + h + f * 6) * 20) + fill(W) + s(0);
      s(W);
      noFill();
    }

  for (let i = 0; i < snowflakes.length; i++) {
    snowflakes[i].fall();
    snowflakes[i].display();
  }

  if (snowflakes.length < 100) {
    let snowProbability = map(noise(frameCount * 0.01), 0, 1, 0, 1);
    if (snowProbability > 0.5) {
      let x = random(width);
      let y = random(-10, -500);
      let snowflake = new Snowflake(x, y);
      snowflakes.push(snowflake);
    }
  }
}
