(this.webpackJsonphbeatbox=this.webpackJsonphbeatbox||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(0),n=a(1),o=a.n(n),c=a(7),i=a.n(c),l=(a(14),a(2)),r=a(3),d=a(5),u=a(4),p=(a(15),a(16),function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).state={activated:0,sound:t.props.sound},t.loader=function(){t.props.loadfile_s&&(a.selected_file.includes("c"+t.props.colnum+"r"+t.props.rownum)?(console.log("asdad"),t.setState({activated:1})):t.setState({activated:0}))},t.saver=function(){t.props.save_s&&t.state.activated&&(console.log("before",a.records),a.records.push("c"+t.props.colnum+"r"+t.props.rownum))},t.downloader=function(){if(t.props.download_s&&a.download_ready){a.download_ready=!1,console.log("after: ",a.records);var e={active:a.records};a.downloadToFile(e,"my-new-file.json","text/plain")}},t.cleaner=function(){t.props.clear&&t.state.activated&&t.setState({activated:0})},t.player=function(){t.props.activated&&t.state.activated&&t.state.sound.play()},t.updateButton=function(){t.state.sound.play(),t.setState({activated:1^t.state.activated})},t}return Object(r.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:a.cssStates[this.state.activated]+" allbuttons",onClick:this.updateButton,children:[this.player(),this.cleaner(),this.saver(),this.downloader(),this.loader()]})}}]),a}(o.a.Component));p.cssStates=["rest","activated"],p.records=[],p.selected_file=null,p.downloadToFile=function(t,e,a){var s=document.createElement("a"),n=new Blob([JSON.stringify(t)],{type:a});s.href=URL.createObjectURL(n),s.download=e,s.click(),URL.revokeObjectURL(s.href)},p.download_ready=!1;a(17);var h=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).state={activated:0},t.actState=function(){t.setState({activated:1})},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{className:"allcol "+a.cssstates[this.state.activated||this.props.act_col===this.props.colnum?1:0],children:[Object(s.jsx)("div",{className:"alllight light-"+a.cssstates[this.state.activated||this.props.act_col===this.props.colnum?1:0],children:"\u2604"}),this.props.sounds.map((function(e,a){return Object(s.jsx)(p,{colnum:t.props.colnum,rownum:a,activated:t.state.activated||t.props.act_col===t.props.colnum?1:0,sound:e,clear:t.props.clear,save_s:t.props.save_s,download_s:t.props.download_s,loadfile_s:t.props.loadfile_s})})),Object(s.jsx)("div",{className:"testcol",onClick:this.actState,children:"\u260a"})]})}},{key:"componentDidUpdate",value:function(){var t=this;this.state.activated&&setTimeout((function(){t.setState({activated:0})}),this.props.speedo)}}]),a}(o.a.Component);h.cssstates=["colrest","colact"];var v=h,f=(a(18),function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).faster_g=function(){t.props.faster_g()},t.slower_g=function(){t.props.slower_g()},t}return Object(r.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"speed-changer",children:[Object(s.jsx)("div",{className:"speed-changer-button",onClick:this.faster_g,children:"+"}),Object(s.jsx)("div",{className:"speed-changer-speed",children:this.props.speedo+" ms"}),Object(s.jsx)("div",{className:"speed-changer-button",onClick:this.slower_g,children:"-"})]})}}]),a}(o.a.Component)),b=a(8),j=(a(19),function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={audioData:new Uint8Array(0)},t.canvas=o.a.createRef(),t.tick=function(){t.analyser.getByteTimeDomainData(t.dataArray),t.setState({audioData:t.dataArray}),t.rafId=requestAnimationFrame(t.tick)},t}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t;for(this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.audioContext.createAnalyser(),this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),t=0;t<this.props.sounds.length;t++){var e=this.audioContext.createMediaElementSource(this.props.sounds[t]);e.connect(this.audioContext.destination),e.connect(this.analyser)}this.rafId=requestAnimationFrame(this.tick)}},{key:"draw",value:function(){var t=this.canvas.current,e=t.height,a=t.width,s=t.getContext("2d"),n=1*a/this.state.audioData.length;s.lineWidth=2,s.clearRect(0,0,a,e),s.beginPath(),s.moveTo(0,e/2);var o,c=0,i=Object(b.a)(this.state.audioData);try{for(i.s();!(o=i.n()).done;){var l=o.value/255*e;s.lineTo(c,l),c+=n}}catch(r){i.e(r)}finally{i.f()}s.lineTo(c,e/2),s.strokeStyle="#5bd9fc",s.stroke()}},{key:"componentDidUpdate",value:function(){this.draw()}},{key:"render",value:function(){return Object(s.jsx)("canvas",{className:"visual-box",ref:this.canvas})}}]),a}(o.a.Component)),_=a.p+"static/media/ccc.595e2854.wav",m=a.p+"static/media/ccd.7ec7142f.wav",g=a.p+"static/media/cce.49e90834.wav",y=a.p+"static/media/ccf.beb2075e.wav",w=a.p+"static/media/ccg.b4e6a17c.wav",O=a.p+"static/media/cch.b5a530be.wav",x=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).state={speedo:500,act_col:-1,clear:!1,save_s:!1,download_s:!1,load_s:!1,loadfile_s:!1},t.intervals=null,t.isplaying=!1,t.sounds=[new Audio(_),new Audio(m),new Audio(g),new Audio(y),new Audio(w),new Audio(O)],t.onChangeHandler=function(t){var e=t.target.files[0],a=new FileReader;a.addEventListener("load",(function(t){var e=t.target.result;p.selected_file=JSON.parse(e).active})),a.readAsText(e)},t.upload_g=function(){p.selected_file&&t.setState({loadfile_s:!0})},t.save_g=function(){p.records=[],t.setState({save_s:!0})},t.load_g=function(){t.setState({load_s:1^t.state.load_s})},t.clear_g=function(){t.setState({clear:!0})},t.play_col_test=function(){t.setState({act_col:(t.state.act_col+1)%16})},t.play_g=function(){t.intervals=setInterval(t.play_col_test,t.state.speedo),t.isplaying=!0},t.pause_g=function(){clearInterval(t.intervals),t.isplaying=!1},t.stop_g=function(){clearInterval(t.intervals),t.isplaying=!1,t.setState({act_col:-1})},t.faster_g=function(){t.setState({speedo:Math.max(100,t.state.speedo-100)}),t.isplaying&&(clearInterval(t.intervals),t.intervals=setInterval(t.play_col_test,t.state.speedo))},t.slower_g=function(){t.setState({speedo:Math.min(1e3,t.state.speedo+100)}),t.isplaying&&(clearInterval(t.intervals),t.intervals=setInterval(t.play_col_test,t.state.speedo))},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{className:"panel-master",children:[Object(s.jsxs)("div",{className:"button-boss",children:[this.state.load_s?Object(s.jsxs)("div",{className:"button-container",children:[Object(s.jsx)("input",{type:"file",name:"file",onChange:this.onChangeHandler})," ",Object(s.jsx)("button",{onClick:this.upload_g,children:"test upload"}),Object(s.jsx)("button",{onClick:this.load_g,children:"test cancel"})]}):Object(s.jsxs)("div",{className:"button-container",children:[Object(s.jsx)("div",{className:"panel-buttons",onClick:this.play_g,children:"test play"}),Object(s.jsx)("div",{className:"panel-buttons",onClick:this.pause_g,children:"test pause"}),Object(s.jsx)("div",{className:"panel-buttons",onClick:this.stop_g,children:"test stop"}),Object(s.jsx)("div",{className:"panel-buttons",onClick:this.clear_g,children:"test clear"}),Object(s.jsx)("div",{className:"panel-buttons",onClick:this.save_g,children:"test save"}),Object(s.jsx)("div",{className:"panel-buttons",onClick:this.load_g,children:"test load"}),this.state.load_s?Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{type:"file",name:"file",onChange:this.onChangeHandler})," ",Object(s.jsx)("button",{onClick:this.upload_g,children:"test upload"})," "]}):Object(s.jsx)("div",{})]}),Object(s.jsx)(j,{sounds:this.sounds})]}),Object(s.jsx)(f,{faster_g:this.faster_g,slower_g:this.slower_g,speedo:this.state.speedo}),Object(s.jsx)("div",{className:"panel",children:a.col_starter.map((function(e){return Object(s.jsx)(v,{colnum:e,act_col:t.state.act_col,clear:t.state.clear,save_s:t.state.save_s,download_s:t.state.download_s,loadfile_s:t.state.loadfile_s,sounds:t.sounds,speedo:t.state.speedo})}))})]})}},{key:"componentDidUpdate",value:function(){this.state.clear&&this.setState({clear:!1}),this.state.save_s&&(this.setState({save_s:!1,download_s:!0}),p.download_ready=!0),this.state.loadfile_s&&(console.log("loadfile finish"),this.setState({loadfile_s:!1}))}}]),a}(o.a.Component);x.panel_buttons=["play","pause","stop","faster","slower"],x.col_starter=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];var k=x;i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.f864ac49.chunk.js.map