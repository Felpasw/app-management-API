 import tests from '../config/tableModels/test'



 const getCounts = async (query: any) => {
   
    const typeTests = ['CPU', 'USB',  'Ethernet', 'Ping']

    const promise = [
     tests.countDocuments({ ...query, success: 'true' }), 
     tests.countDocuments({ ...query, success: 'false' }), 
   ]

   for(const type of typeTests){
    promise.push(
        tests.countDocuments({...query, success: 'true', type}),
        tests.countDocuments({...query, success: 'false', type})
    )
   }

   const results = await Promise.all(promise)

   return {
    general:{
        success: results[0],
        fail: results[1]
    },
    CPU: {
        success: results[2],
        fail: results[3],
    }, 
    USB: {
        success: results[4],
        fail: results[5]
    },
    Ethernet: {
        success: results[6],
        fail: results[7]
    },
    Ping: {
        success: results[8],
        fail: results[9]
    }
   }

 }
 export default { getCounts }
