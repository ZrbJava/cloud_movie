const getOpenId = require('./getOpenId/index')
const getMiniProgramCode = require('./getMiniProgramCode/index')
const createCollection = require('./createCollection/index')
const selectRecord = require('./selectRecord/index')
const updateRecord = require('./updateRecord/index')
const sumRecord = require('./sumRecord/index')
const getCloudCallSign = require('./getCloudCallSign/index')
const getUrlLink = require('./getUrlLink/index')



// 云函数入口函数
exports.main = async (event, context) => {
  console.log('event',event)
  switch (event.type) {
    case 'getOpenId':
      return await getOpenId.main(event, context)
    case 'getMiniProgramCode':
      return await getMiniProgramCode.main(event, context)
    case 'createCollection':
      return await createCollection.main(event, context)
    case 'selectRecord':
      return await selectRecord.main(event, context)
    case 'updateRecord':
      return await updateRecord.main(event, context)
    case 'sumRecord':
      return await sumRecord.main(event, context)
    case 'getCloudCallSign':
    return await getCloudCallSign.main(event, context)
    case 'getUrlLink':
      return await getUrlLink.main(event, context)
  }
}
