

const mongoose = require('mongoose');
//创建寄件信息的规则
const sendinforSchema = new mongoose.Schema({
    //寄件人姓名
    sendername: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 4
    }
    ,
     sendertel: { /*寄件人手机*/
        type: Number,
        required: true,
    }, senderbigadd: {/*寄件人省市*/
        type: String,
        required: true
    }, sendersmalladd: {/*寄件人详细地址*/
        type: String,
        required: true
    }, senderline: {/*寄件人固定电话,非必填*/
        type: Number
    },sendercompany:{ /*寄件人公司,非必填*/
        type:String
    }
    , receivername: {/*收件人姓名*/
        type: String,
        required: true,
        minlength: 2,
        maxlength: 4
    }, receivertel: {/*收件人手机*/
        type: Number,
        required: true,
    }, receiverbigadd: {/*收件人省市*/
        type: String,
        required: true
    }, receiversmalladd: {/*收件人详细地址*/
        type: String,
        required: true
    }, receiverline: {/*收件人固定电话,非必填*/
        type: Number
    },receivercompany:{ /*收件人公司,非必填*/
        type:String
    },time:{
        type:String,
        required:true
    }
   
})
// 创建寄件规则集合
const Senderinfor=mongoose.model('Senderinfor',sendinforSchema)
//导出集合对象
module.exports=Senderinfor;