import express from "express";
import supabase from "../config/supabase.js";

const router = express.Router();

console.log("✅ raffleRoutes.js loaded");


router.get("/", (req, res) => {
    res.send("Raffle API Working!");
});


router.post("/register", async (req, res) => {

    const {
        student_number,
        full_name,
        college,
        course,
        year_level,
        facebook_name,
    } = req.body;


    try {

        // Check if student already exists
        const { data: existingStudent, error: checkError } =
            await supabase
                .from("participants")
                .select("*")
                .eq("student_number", student_number);


        if(checkError){
            console.log(checkError);

            return res.status(500).json({
                message:"Database Error"
            });
        }


        if(existingStudent.length > 0){

            return res.status(400).json({
                message:"Student already registered."
            });

        }



        // Insert participant
        const { data, error } =
            await supabase
                .from("participants")
                .insert([
                    {
                        student_number,
                        full_name,
                        college,
                        course,
                        year_level,
                        facebook_name
                    }
                ])
                .select();



        if(error){

            console.log("INSERT ERROR");
            console.log(error);

            return res.status(500).json({
                message:"Failed to save registration."
            });

        }



        console.log("✅ Student Registered!");

        res.json({

            success:true,

            message:"Registration successful!",

            data:data

        });



    } catch(error){

        console.log(error);

        res.status(500).json({

            message:"Server Error"

        });

    }

});


export default router;