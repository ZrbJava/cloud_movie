 import consoleStyle from './consoleStyle.js'
 const isLog  = __wxConfig.envVersion === 'develop'?true:false
 class Log {
  constructor(){
    
  }
  success(){
    isLog && console.log(`%c【success】`,consoleStyle.success,...arguments)
  }
  warn(){
    isLog && console.log(`%c【warn】`,consoleStyle.warning,...arguments)
  }
  error(){
    isLog && console.log(`%c【error】`,consoleStyle.error,...arguments)
  }
  info(){
    isLog && console.log(`%c【info】`,consoleStyle.info,...arguments)
  }
  content(){
    isLog && console.log(`%c【content】`,consoleStyle.content,...arguments)
  }
 }


 export default new Log()