# Ativar cadastro e login reais do VICE CLOUD

Esta versão usa Supabase Auth para cadastro, login e logout.

## 1. Criar um projeto Supabase
1. Acesse https://supabase.com/dashboard e crie uma conta/projeto.
2. No projeto, abra Project Settings -> API.
3. Copie o Project URL e a chave anon/publicável. Nunca use a chave service_role.

## 2. Configurar na Vercel
1. Abra o projeto VICE CLOUD na Vercel.
2. Vá em Settings -> Environment Variables.
3. Crie NEXT_PUBLIC_SUPABASE_URL com o Project URL.
4. Crie NEXT_PUBLIC_SUPABASE_ANON_KEY com a chave anon/publicável.
5. Marque Production, Preview e Development e salve.
6. Vá em Deployments e faça Redeploy.

## 3. Configurar URLs no Supabase
Em Authentication -> URL Configuration:
- Site URL: endereço público do seu site.
- Redirect URLs: adicione o domínio público da Vercel com /** no final.

## 4. Testar
Abra /cadastro, crie uma conta, confirme o e-mail se for solicitado, depois entre em /login. A área do jogador fica em /conta.

Pagamentos, histórico de jogos, administração e streaming ainda não estão incluídos.
