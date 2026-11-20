 "use client";
import {useEffect,useState} from "react";
import Link from "next/link";
import {supabase} from "../../lib/supabase";
import {UserRound,LogOut} from "lucide-react";
export default function ContaPage(){
 const [email,setEmail]=useState("");const [name,setName]=useState("Jogador");const [loading,setLoading]=useState(true);
 useEffect(()=>{let active=true;async function load(){if(!supabase){setLoading(false);return;}const {data}=await supabase.auth.getUser();if(!data.user){window.location.href="/login";return;}if(active){setEmail(data.user.email||"");setName(data.user.user_metadata?.full_name||"Jogador");setLoading(false);}}load();return()=>{active=false;};},[]);
 async function logout(){if(supabase)await supabase.auth.signOut();window.location.href="/";}
 if(loading)return <main className="auth-page"><div className="auth-card">Carregando sua conta...</div></main>;
 return <main className="auth-page"><section className="auth-card account-card"><div className="auth-brand">V<span>ICE</span> CLOUD</div><div className="account-icon"><UserRound size={30}/></div><div className="auth-kicker">ÁREA DO JOGADOR</div><h1>OLÁ, <em>{name.toUpperCase()}.</em></h1><p>Sua conta VICE CLOUD está conectada.</p><div className="account-email">{email}</div><button onClick={logout}>SAIR DA CONTA <LogOut size={17}/></button><Link className="account-home" href="/">Voltar ao início</Link></section></main>;
}