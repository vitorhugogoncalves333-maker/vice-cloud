 "use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabase";
import { ArrowLeft, LogIn } from "lucide-react";
export default function LoginPage() {
 const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [message,setMessage]=useState(""); const [busy,setBusy]=useState(false);
 async function submit(e:FormEvent){e.preventDefault();setMessage("");if(!supabase){setMessage("Falta configurar o Supabase na Vercel. Veja o guia SUPABASE-VERCEL.md.");return;}setBusy(true);const {error}=await supabase.auth.signInWithPassword({email,password});setBusy(false);if(error){setMessage(error.message);return;}window.location.href="/conta";}
 return <main className="auth-page"><Link className="back" href="/"><ArrowLeft size={16}/> Voltar ao site</Link><section className="auth-card"><div className="auth-brand">V<span>ICE</span> CLOUD</div><div className="auth-kicker">BEM-VINDO DE VOLTA</div><h1>ENTRE NA SUA<br/><em>CONTA.</em></h1><p>Acesse sua área VICE CLOUD.</p><form onSubmit={submit}><label>E-MAIL</label><input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="voce@email.com"/><label>SENHA</label><input type="password" required value={password} onChange={e=>setPassword(e.target.value)} placeholder="Sua senha"/><button disabled={busy}>{busy?"ENTRANDO...":"ENTRAR"} <LogIn size={17}/></button></form>{message&&<div className="auth-message">{message}</div>}<div className="auth-switch">Ainda não tem conta? <Link href="/cadastro">Criar conta</Link></div></section></main>;
}