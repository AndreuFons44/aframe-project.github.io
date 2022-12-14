AFRAME.registerComponent('orbita', {

    schema: {
      target: {type: 'selector'},
      velocitat: {type: 'number', default: 0.1 },
      distancia: {type: 'number', default: 1 }
    },

    init: function () {

      this.centre = this.data.target.object3D.position;
      this.angle = 1.6;
      let camera = this.el;
        camera.setAttribute('position', {
            x: this.centre.x + this.data.distancia * Math.cos(this.angle),
            y: this.centre.y + 10,
            z: this.centre.z  + this.data.distancia * Math.sin(this.angle),
            });
        camera.setAttribute('Rotation', 0, 180, 0);
    },

    tick: function (time, timeDelta) {
        window.addEventListener("keydown", (event) => {
            if (event.defaultPrevented) {
              return;
            }
            switch (event.key) {
              case "Left":
              case "ArrowLeft":
                console.log("Left");
                this.el.setAttribute('position', {
                    x: this.centre.x + this.data.distancia * Math.cos(this.angle),
                    y: this.centre.y + 10,
                    z: this.centre.z  + this.data.distancia * Math.sin(this.angle),
                    });
                this.angle += this.data.velocitat;
                break;
              case "Right":
              case "ArrowRight":
                console.log("right");
                this.el.setAttribute('position', {
                    x: this.centre.x + this.data.distancia * Math.cos(this.angle),
                    y: this.centre.y + 10,
                    z: this.centre.z  + this.data.distancia * Math.sin(this.angle),
                    });
                this.angle -= this.data.velocitat;
                break;
              default:
                return;
            }
          event.preventDefault();
          }, true);
    }

  });