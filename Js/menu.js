const {app} = require('electron')

module.exports = [
  {
    label:'covid', 
    submenu:[
      {label:'fullScreen',role:'toggleFullScreen'},
      {label:'two', submenu:[{label:' two . one'}, {label:'two . two'}]},
      {label:'three'}
    ]
  },
  {
    label:'Setting', 
    submenu:[
      {label:'maximize',click:()=>{app.maximize()}},
      {label:'minimize', submenu:[{label:' two . one'}, {label:'two . two'}]},
      {label:'Quit', click:()=>{app.quit()}}
    ]
  }
]