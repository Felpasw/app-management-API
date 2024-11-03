 import dbo from '../dbo/graph'


 interface params {
    SN: string
 }

 const getCounts = async (query: params) => {
    return await dbo.getCounts(query)
 }

 export default {
   getCounts,
 }
