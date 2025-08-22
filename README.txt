
ManuTech PWA + Firebase (Auth + Firestore)
=========================================

1) Suba estes arquivos no seu repositório (ou GitHub Pages).
2) No Firebase Console, ative:
   - Authentication -> Métodos de login -> Email/senha (ativar)
   - Firestore Database -> Criar banco (modo produção)

3) Regras do Firestore (Segurança):
   Cole em Firestore -> Regras:
   ----------------------------------
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId}/{document=**} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ----------------------------------

4) Abra index.html. Primeiro cadastre um usuário (Registrar), depois Entre.
   O app salva dados por usuário em:
      users/{uid}/equips
      users/{uid}/orders

5) PWA: no celular/Chrome, abra o site e use "Instalar". Funciona offline.
