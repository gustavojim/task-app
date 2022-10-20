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
  });
  // TODO identificar el result y retornar lo que interesa
};

// LOGIN
export const login = async (email, password) => {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return response.data.user.id;
};

//crear task
export const newTask = async (task) => {
  const response = await supabase.from("task").insert(task);
  // TODO identificar respuesta y retornar lo que necesitamos - true or false si se inserto o no
  console.log(response);
};

// obtendremos las task
export const getTasks = async () => {
  const response = await supabase
    .from("task")
    .select("*")
    .order("id", { ascending: false });
  console.log(response);
  // TODO Retornar la info de los tasks - response.data
};


//Actualizar task
/*
task: {
            title: 'Titulo modificado',
            description: 'Descripcion del task modificado'
        }
*/

export const updateTask = async (taskId, task) => {

    const response = await supabase
        .from('task')
        .update(task)
        .eq('id', taskId)

    // TODO identificar el resulado y retornar lo que nos interesa, p.ej true si ha ido bien false si ha fallado
    console.log(response)
}

export const deleteTask = async (taskId) => {
    const response = await supabase
        .from('task')
        .delete()
        .eq('id', taskId)
    // TODO identificar el resulado y retornar lo que nos interesa, p.ej true si ha ido bien false si ha fallado
    console.log(response)
}

export const logOut = async () => {
    const response = await supabase.auth.signOut()
    // TODO identificar el resulado y retornar lo que nos interesa, p.ej true si ha ido bien false si ha fallado
    console.log(response)
}