import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

// REGISTRO

export const registro = async (email, password) => {
  const response = await supabase.auth.signUp({
    email,
    password,
  })
  console.log(result)
  if (result.error) return false
  else return true;
}

// LOGIN
export const login = async (email, password) => {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (response.error) return false
   else return response.data.user.id
}

//crear task
export const newTask = async (task) => {
  const response = await supabase.from("task").insert(task);
  console.log(response);
  if (response.error) return false
  else return true;
}

// obtendremos las task


export const getTasks = async () => {
  const response = await supabase
    .from("task")
    .select("*")
    .order("id", { ascending: false });
  console.log(response);
  if (response.error) return false
  else return response.data;
}

//Actualizar task



export const updateTask = async (taskId, task) => {

    const response = await supabase
        .from('task')
        .update(task)
        .eq('id', taskId)
        if (response.error) return false
        else return true;  
      }

export const deleteTask = async (taskId) => {
    const response = await supabase
        .from('task')
        .delete()
        .eq('id', taskId)
        console.log(response)
        if (response.error) return false
        else return true; 
      }

export const logOut = async () => {
    const response = await supabase.auth.signOut()
    if (response.error) return false
    else return true; 
}