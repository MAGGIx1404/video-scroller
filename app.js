gsap.registerPlugin(ScrollTrigger);

const smoothScroll = new LocomotiveScroll({
  el: document.querySelector(".scroll-container"),
  smooth: true,
  smoothMobile: true,
  getDirection: true,
  getSpeed: true,
  multiplier: 1,
});

smoothScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".scroll-container", {
  scrollTop(value) {
    return arguments.length
      ? smoothScroll.scrollTo(value, 0, 0)
      : smoothScroll.scroll.instance.scroll.y;
  },

  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  pinType: document.querySelector(".scroll-container").style.transform
    ? "transform"
    : "fixed",
});
ScrollTrigger.addEventListener("refresh", () => smoothScroll.update());
ScrollTrigger.refresh();

// animation

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
        ./images/00001.png
        ./images/00002.png
        ./images/00003.png
        ./images/00004.png
        ./images/00005.png
        ./images/00006.png
        ./images/00007.png
        ./images/00008.png
        ./images/00009.png
        ./images/00010.png
        ./images/00011.png
        ./images/00012.png
        ./images/00013.png
        ./images/00014.png
        ./images/00015.png
        ./images/00016.png
        ./images/00017.png
        ./images/00018.png
        ./images/00019.png
        ./images/00020.png
        ./images/00021.png
        ./images/00022.png
        ./images/00023.png
        ./images/00024.png
        ./images/00025.png
        ./images/00026.png
        ./images/00027.png
        ./images/00028.png
        ./images/00029.png
        ./images/00030.png
        ./images/00031.png
        ./images/00032.png
        ./images/00033.png
        ./images/00034.png
        ./images/00035.png
        ./images/00036.png
        ./images/00037.png
        ./images/00038.png
        ./images/00039.png
        ./images/00040.png
        ./images/00041.png
        ./images/00042.png
        ./images/00043.png
        ./images/00044.png
        ./images/00045.png
        ./images/00046.png
        ./images/00047.png
        ./images/00048.png
        ./images/00049.png
        ./images/00050.png
        ./images/00051.png
        ./images/00052.png
        ./images/00053.png
        ./images/00054.png
        ./images/00055.png
        ./images/00056.png
        ./images/00057.png
        ./images/00058.png
        ./images/00059.png
        ./images/00060.png
        ./images/00061.png
        ./images/00062.png
        ./images/00063.png
        ./images/00064.png
        ./images/00065.png
        ./images/00066.png
        ./images/00067.png
        ./images/00068.png
        ./images/00069.png
        ./images/00070.png
        ./images/00071.png
        ./images/00072.png
        ./images/00073.png
        ./images/00074.png
        ./images/00075.png
        ./images/00076.png
        ./images/00077.png
        ./images/00078.png
        ./images/00079.png
        ./images/00080.png
        ./images/00081.png
        ./images/00082.png
        ./images/00083.png
        ./images/00084.png
        ./images/00085.png
        ./images/00086.png
        ./images/00087.png
        ./images/00088.png
        ./images/00089.png
        ./images/00090.png
        ./images/00091.png
        ./images/00092.png
        ./images/00093.png
        ./images/00094.png
        ./images/00095.png
        ./images/00096.png
        ./images/00097.png
        ./images/00098.png
        ./images/00099.png
        ./images/00100.png
        ./images/00101.png
        ./images/00102.png
        ./images/00103.png
        ./images/00104.png
        ./images/00105.png
        ./images/00106.png
        ./images/00107.png
        ./images/00108.png
        ./images/00109.png
        ./images/00110.png
        ./images/00111.png
        ./images/00112.png
        ./images/00113.png
        ./images/00114.png
        ./images/00115.png
        ./images/00116.png
        ./images/00117.png
        ./images/00118.png
        ./images/00119.png
        ./images/00120.png
        ./images/00121.png
        ./images/00122.png
        ./images/00123.png
        ./images/00124.png
        ./images/00125.png
        ./images/00126.png
        ./images/00127.png
        ./images/00128.png
        ./images/00129.png
        ./images/00130.png
        ./images/00131.png
        ./images/00132.png
        ./images/00133.png
        ./images/00134.png
        ./images/00135.png
        ./images/00136.png
        ./images/00137.png
        ./images/00138.png
        ./images/00139.png
        ./images/00140.png
        ./images/00141.png
        ./images/00142.png
        ./images/00143.png
        ./images/00144.png
        ./images/00145.png
        ./images/00146.png
        ./images/00147.png
        ./images/00148.png
        ./images/00149.png
        ./images/00150.png
        ./images/00151.png
        ./images/00152.png
        ./images/00153.png
        ./images/00154.png
        ./images/00155.png
        ./images/00156.png
        ./images/00157.png
        ./images/00158.png
        ./images/00159.png
        ./images/00160.png
        ./images/00161.png
        ./images/00162.png
        ./images/00163.png
        ./images/00164.png
        ./images/00165.png
        ./images/00166.png
        ./images/00167.png
        ./images/00168.png
        ./images/00169.png
        ./images/00170.png
        ./images/00171.png
        ./images/00172.png
        ./images/00173.png
        ./images/00174.png
        ./images/00175.png
        ./images/00176.png
        ./images/00177.png
        ./images/00178.png
        ./images/00179.png
        ./images/00180.png
        ./images/00181.png
        ./images/00182.png
        ./images/00183.png
        ./images/00184.png
        ./images/00185.png
        ./images/00186.png
        ./images/00187.png
        ./images/00188.png
        ./images/00189.png
        ./images/00190.png
        ./images/00191.png
        ./images/00192.png
        ./images/00193.png
        ./images/00194.png
        ./images/00195.png
        ./images/00196.png
        ./images/00197.png
        ./images/00198.png
        ./images/00199.png
        ./images/00200.png
        ./images/00201.png
        ./images/00202.png
        ./images/00203.png
        ./images/00204.png
        ./images/00205.png
        ./images/00206.png
        ./images/00207.png
        ./images/00208.png
        ./images/00209.png
        ./images/00210.png
        ./images/00211.png
        ./images/00212.png
        ./images/00213.png
        ./images/00214.png
        ./images/00215.png
        ./images/00216.png
        ./images/00217.png
        ./images/00218.png
        ./images/00219.png
        ./images/00220.png
        ./images/00221.png
        ./images/00222.png
        ./images/00223.png
        ./images/00224.png
        ./images/00225.png
        ./images/00226.png
        ./images/00227.png
        ./images/00228.png
        ./images/00229.png
        ./images/00230.png
        ./images/00231.png
        ./images/00232.png
        ./images/00233.png
        ./images/00234.png
        ./images/00235.png
        ./images/00236.png
        ./images/00237.png
        ./images/00238.png
        ./images/00239.png
        ./images/00240.png
        ./images/00241.png
        ./images/00242.png
        ./images/00243.png
        ./images/00244.png
        ./images/00245.png
        ./images/00246.png
        ./images/00247.png
        ./images/00248.png
        ./images/00249.png
        ./images/00250.png
        ./images/00251.png
        ./images/00252.png
        ./images/00253.png
        ./images/00254.png
        ./images/00255.png
        ./images/00256.png
        ./images/00257.png
        ./images/00258.png
        ./images/00259.png
        ./images/00260.png
        ./images/00261.png
        ./images/00262.png
        ./images/00263.png
        ./images/00264.png
        ./images/00265.png
        ./images/00266.png
        ./images/00267.png
        ./images/00268.png
        ./images/00269.png
        ./images/00270.png
        ./images/00271.png
    `;
  return data.split("\n")[index];
}

const frameCount = 271;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: canvas,
    start: `top top`,
    end: `600% top`,
    scroller: ".scroll-container",
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
