import pool from "@/lib/db";

export async function GET(){
    // const content = Request.params;

    // if(!content){
    //     return Response.json({msg:"Fail to Connect"});
    // }

    // return Response.json({"ok":true});
    console.log("Inside Health Check API:");

    //printing db values
    console.log("DB HOST:", process.env.DB_HOST);
    
    try{
        const result = await pool.query("Select 1");
        console.log("Printing Query data:",result);
        return Response.json({ok:true,db:"Connection to Database Successfull."},{status:200});
    }catch(error){
        console.error("DB connection failed:", error);
        return Response.json({ok:false,db:"disconnected",error:"Db Connection Failed"},{status:500});
    }
}