(function() {
    'use strict'

    const scrollActive = {
        activeSection: 'about',
        init: function() {
          this.window = document.window;
          this.scrollWorkSection = document.getElementById('work-scroll');
          this.fixedWorkSection = document.getElementById('work-fixed');
          this.contactSection = document.getElementById('contact');
          this.aboutSection = document.getElementById('about');
          this.workSection = $('#work');
        },
        checkForWorkSection: function() {
            this.topDistance = this.scrollWorkSection.getBoundingClientRect().top;
            this.topAboutDistance = this.aboutSection.getBoundingClientRect().top;
            this.botDistance =this.fixedWorkSection.getBoundingClientRect().height-this.scrollWorkSection.getBoundingClientRect().bottom;
            console.log(this.botDistance);
            if(this.topDistance > 0){
                this.fixedWorkSection.className = 'fixed-half';
                  this.fixedWorkSection.setAttribute("style","top:0px");
            }
                if (this.topDistance <= 0 && this.botDistance <=0) {
                  this.fixedWorkSection.className = 'fixed-half fixed-now';
                  this.fixedWorkSection.setAttribute("style","top:0px");
                }
                // else if(this.botDistance <= 0 && this.topAboutDistance = this.aboutSection.getBoundingClientRect().top;){
                //     this.fixedWorkSection.setAttribute("style","top:0px");
                // }
                if(this.botDistance>=0){
                    this.hx = this.scrollWorkSection.getBoundingClientRect().height-window.innerHeight;
                    this.fixedWorkSection.className = 'fixed-half';
                    this.topCSS = "top:"+this.hx+"px";
                    this.fixedWorkSection.setAttribute("style",this.topCSS);

                }

        },

    };


    scrollActive.init();

    $(window).scroll(function() {
        scrollActive.checkForWorkSection();
    });
})();
