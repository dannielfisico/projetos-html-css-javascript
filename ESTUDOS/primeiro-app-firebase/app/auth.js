const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

auth.languageCode = 'pt-br';

export async function login(){
    try{
        const response =  await auth.signInWinthPoupup(provider);
        return response.user;
    }catch(error){
        throw new Error(error);
    }
}

export function logout(){
    auth.singOut();
}