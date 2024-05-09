 import Form from "../models/Form.js";
 
export const createform = async(req, res, next) => {

const newForm  = new Form({

    // id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dob: req.body.dob,               
    gender: req.body.gender,
    education:  req.body.education,
    company: req.body.company,
    experience: req.body.experience,
    designation: req.body.designation


})
 await newForm.save();
 return res.status(200).send("Employee Form registered sucessfully")
}


//update form
export const updateform = async(req, res, next)=> {

    try {     
      
          const form = await Form.findById({ _id: req.params.id });
         
                if (form) {
                    const newData = await Form.findByIdAndUpdate(
                        req.params.id,
                        { $set: req.body },
                        { new: true }
                    );
                        
                    return res.status(200).send("form Updated!")

                }
                else {
                    return res.status(404).send("form not found!")
                }
            }
            catch (error) {
                return res.status(500).send("Internal Error!");
            }
        }

// delete
        export const deleteForm = async (req, res, next) => {
            try {
               const formId = req.params.id;
               const form = await Form.findById({_id: formId})
         
             if(form){
                await Form.findByIdAndDelete(formId);
               return res.status(200).send("form deleted!")
              } else{
                
                
                return res.status(400).send("form Not found!")
             }
    
            } catch (error) {
               
                return res.status(500).send("Internal Server Error!");
            }
       }

// get all 
        export const getAllRoles = async (req, res, next) => {
            try {
                const form = await Form.find({});
                return res.status(200).send(form);
            }
            catch (error) {
                return res.status(500).send("Internal Server Error!");
        
                }
        }
