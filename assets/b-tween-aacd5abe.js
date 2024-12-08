var a=function(t){return function(n){return Math.pow(n,t)}},u=function(t){return function(n){return 1-Math.abs(Math.pow(n-1,t))}},e=function(t){return function(n){return n<.5?a(t)(n*2)/2:u(t)(n*2-1)/2+.5}},p=function(t){return t},q=a(2),b=u(2),M=e(2),y=a(3),F=u(3),T=e(3),w=a(4),P=u(4),S=e(4),U=a(5),A=u(5),B=e(5),D=function(t){return 1+Math.sin(Math.PI/2*t-Math.PI/2)},j=function(t){return Math.sin(Math.PI/2*t)},x=function(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2},o=function(t){var n=7.5625,i=2.75;return t<1/i?n*t*t:t<2/i?(t-=1.5/i,n*t*t+.75):t<2.5/i?(t-=2.25/i,n*t*t+.9375):(t-=2.625/i,n*t*t+.984375)},c=function(t){return 1-o(1-t)},z=function(t){return t<.5?c(t*2)*.5:o(t*2-1)*.5+.5},C=Object.freeze({linear:p,quadIn:q,quadOut:b,quadInOut:M,cubicIn:y,cubicOut:F,cubicInOut:T,quartIn:w,quartOut:P,quartInOut:S,quintIn:U,quintOut:A,quintInOut:B,sineIn:D,sineOut:j,sineInOut:x,bounceOut:o,bounceIn:c,bounceInOut:z}),f=function(n){var i=n.from,r=n.to,d=n.duration,v=n.delay,I=n.easing,O=n.onStart,l=n.onUpdate,m=n.onFinish;for(var s in i)r[s]===void 0&&(r[s]=i[s]);for(var h in r)i[h]===void 0&&(i[h]=r[h]);this.from=i,this.to=r,this.duration=d||500,this.delay=v||0,this.easing=I||"linear",this.onStart=O,this.onUpdate=l||function(){},this.onFinish=m,this.startTime=Date.now()+this.delay,this.started=!1,this.finished=!1,this.timer=null,this.keys={}};f.prototype.update=function(){if(this.time=Date.now(),!(this.time<this.startTime)&&!this.finished){if(this.elapsed===this.duration){this.finished||(this.finished=!0,this.onFinish&&this.onFinish(this.keys));return}this.elapsed=this.time-this.startTime,this.elapsed=this.elapsed>this.duration?this.duration:this.elapsed;for(var n in this.to)this.keys[n]=this.from[n]+(this.to[n]-this.from[n])*C[this.easing](this.elapsed/this.duration);this.started||(this.onStart&&this.onStart(this.keys),this.started=!0),this.onUpdate(this.keys)}};f.prototype.start=function(){var n=this;this.startTime=Date.now()+this.delay;var i=function(){n.update(),n.timer=requestAnimationFrame(i),n.finished&&(cancelAnimationFrame(n.timer),n.timer=null)};i()};f.prototype.stop=function(){cancelAnimationFrame(this.timer),this.timer=null};export{f as T};