import { comments } from "@/data/comments";

export default function handler(req,res){
    const comment_id=parseInt(req.query.comment_id);
    if(req.method=="GET"){
        const comment=comments.find(el=>el.id==comment_id);
        res.status(201).json(comment)
    }else if(req.method=="DELETE"){
        const index=comments.findIndex((el)=>el.id==comment_id);
        comments.splice(index,1);
        res.status(201).json({"msg":"Comment Deleted"})
    }
}