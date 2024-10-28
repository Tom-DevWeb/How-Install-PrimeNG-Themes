# Comment installer des thèmes PrimeNG

> [!NOTE]
> Lien de mon article [Ajouter des thèmes PrimeNG](https://blog.tomwebdev.fr/ajouter-des-themes-primeng)

## 🌟 Introduction

Personnaliser l'apparence de vos **applications web** est essentiel pour créer des expériences utilisateur attrayantes et cohérentes. Avec la **librairie de composants PrimeNG**, vous disposez d'un puissant outil qui permet non seulement de concevoir des interfaces performantes, mais aussi de les customiser selon vos besoins grâce à des **thèmes variés**.

Dans cet article, nous allons explorer les différentes manières d'**ajouter des thèmes dans PrimeNG**. Vous découvrirez comment tirer parti des thèmes fournis par défaut pour une mise en place rapide et efficace. Ensuite, nous plongerons dans la création de votre propre **thème personnalisé PrimeNG**, vous permettant d'adapter l'apparence de vos **composants Angular** au style unique de votre projet.

Vous allez apprendre à:

- **Utiliser un thème existant PrimeNG**
    
- **Créer un thème personnalisé PrimeNG**
    
- **Changer de thème en emps réel avec PrimeNG**
    

## 🚀 Utiliser les thèmes intégrés dans PrimeNG

PrimeNG propose dans son fichier d'installation une liste de plusieurs **thèmes gratuit**, que vous pouvez installer dès le debut de votre projet **Angular**.

> [!TIP]
> Vous pouvez consulter mon article précédent sur l'[Introduction à PrimeNG](https://blog.tomwebdev.fr/introduction-a-primeng-pour-angular-guide-dinstallation-et-premiers-pas)

Voici la liste des **thèmes gratuits PrimeNG** disponibles :

```txt
primeng/resources/themes/bootstrap4-light-blue/theme.css
primeng/resources/themes/bootstrap4-light-purple/theme.css
primeng/resources/themes/bootstrap4-dark-blue/theme.css
primeng/resources/themes/bootstrap4-dark-purple/theme.css
primeng/resources/themes/md-light-indigo/theme.css
primeng/resources/themes/md-light-deeppurple/theme.css
primeng/resources/themes/md-dark-indigo/theme.css
primeng/resources/themes/md-dark-deeppurple/theme.css
primeng/resources/themes/mdc-light-indigo/theme.css
primeng/resources/themes/mdc-light-deeppurple/theme.css
primeng/resources/themes/mdc-dark-indigo/theme.css
primeng/resources/themes/mdc-dark-deeppurple/theme.css
primeng/resources/themes/fluent-light/theme.css
primeng/resources/themes/lara-light-blue/theme.css
primeng/resources/themes/lara-light-indigo/theme.css
primeng/resources/themes/lara-light-purple/theme.css
primeng/resources/themes/lara-light-teal/theme.css
primeng/resources/themes/lara-dark-blue/theme.css
primeng/resources/themes/lara-dark-indigo/theme.css
primeng/resources/themes/lara-dark-purple/theme.css
primeng/resources/themes/lara-dark-teal/theme.css
primeng/resources/themes/soho-light/theme.css
primeng/resources/themes/soho-dark/theme.css
primeng/resources/themes/viva-light/theme.css
primeng/resources/themes/viva-dark/theme.css
primeng/resources/themes/mira/theme.css
primeng/resources/themes/nano/theme.css
primeng/resources/themes/saga-blue/theme.css
primeng/resources/themes/saga-green/theme.css
primeng/resources/themes/saga-orange/theme.css
primeng/resources/themes/saga-purple/theme.css
primeng/resources/themes/vela-blue/theme.css
primeng/resources/themes/vela-green/theme.css
primeng/resources/themes/vela-orange/theme.css
primeng/resources/themes/vela-purple/theme.css
primeng/resources/themes/arya-blue/theme.css
primeng/resources/themes/arya-green/theme.css
primeng/resources/themes/arya-orange/theme.css
primeng/resources/themes/arya-purple/theme.css
primeng/resources/themes/nova/theme.css
primeng/resources/themes/nova-alt/theme.css
primeng/resources/themes/nova-accent/theme.css
primeng/resources/themes/luna-amber/theme.css
primeng/resources/themes/luna-blue/theme.css
primeng/resources/themes/luna-green/theme.css
primeng/resources/themes/luna-pink/theme.css
primeng/resources/themes/rhea/theme.css
```

Pour appliquer un thème il vous suffit de copier/coller la ligne du thème qui vous intéresse puis :

**Dans angular.json**

```json
...
"styles": [
"coller-votre-theme-choisi",
"node_modules/primeng/resources/primeng.min.css",
...
]
```

**Dans style.css**

```css
@import "coller-votre-theme-choisi";
@import "primeng/resources/primeng.css";
```
Cette méthode vous permet d'intégrer facilement des **thèmes PrimeNG prêts à l'emploi** pour vos projets Angular.

## 🛠️ Créer votre propre thème personnalisé

1️⃣ **Première étape** dans le dossier `src` créer un dossier `assets`.

2️⃣ **Télécharger** le fichier .zip fourni dans le repo `primeng-sass-theme` [lien](https://github.com/primefaces/primeng-sass-theme/releases).

3️⃣ Vous devez ensuite **extraire du dossier .zip** `theme-base` et le mettre dans le dossier `assets` que vous avez créé un peu plus tôt.

4️⃣ **Dans le dossier .zip** que vous avez téléchargé, vous avez un dossier `themes` qui regroupe une multitude de thèmes à personnaliser. Vous avez les thèmes de PrimeNG mais également des thèmes ressemblant aux librairies UI comme Material UI ou même tailwind et bootstrap. Si aucun de ses thèmes vous intéresse vous avez un dossier `mytheme` qui un thème neutre à personnaliser. Choisissez le thème qui vous intéresse et copier/coller le dossier dans votre dossier `themes`.

> [!TIP]
> Je vous conseille de ne pas utiliser `mytheme` mais de prendre un thème déjà pré-configuré, vous pourrez après dans le dossier du theme choisi modifier les couleurs et la police par exemple

5️⃣ Nous allons maintenant indiquer à Angular où charger le thème. Dans `styles.scss` **vous ne devez plus avoir d'import**, et dans `angular.json` vous devez avoir ceci :

```json
"styles": [
  "src/styles.scss",
  "node_modules/primeflex/primeflex.css", (si vous utilisez primeflex)
  "src/assets/themes/material/material-dark/standard/indigo/theme.scss", (lien vers theme.scss de votre theme)
  "primeng/resources/primeng.css",
  "node_modules/primeng/resources/primeng.min.css"
],
```
> [!IMPORTANT]
> ⚠️ Vous devez relancer votre projet pour prendre en compte les modifications dans `angular.json`.

🤩 Vous venez d'installer votre **thème custom**, maintenant parcourez vos themes pour les modifier. Vous n'avez pas à toucher au dossier `theme-base`.

## 🔁 Switcher de thème

Nous avons appris à intégrer des **thèmes gratuits PrimeNG** et à créer des **thèmes custom**, maintenant, nous allons voir comment depuis une interface changer instantanément de thème.

### Créer le service

Ajoutons dans un premier temps le service qui permettra de change le theme : `ng g s core/services/theme`

Voici le code du service pour changer de **thème dynamiquement dans PrimeNG**:

```typescript
import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  switchTheme(theme: string) {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }
  }
}
```

### Configurer les bundles

Pour l'exemple, j'ai ajouté 3 thèmes différents avec leur version light et dark. J'ai simplement copié/collé les thèmes se trouvant dans le dossier .zip.

Dans angular.json faire cette modification :

```json
"styles": [
  "src/styles.scss",
  "node_modules/primeflex/primeflex.css",
  "primeng/resources/primeng.css",
  "node_modules/primeng/resources/primeng.min.css",
  {
    "input": "src/assets/themes/material/material-light/standard/indigo/theme.scss",
    "bundleName": "material-light",
    "inject": false
  },
  {
    "input": "src/assets/themes/material/material-dark/standard/indigo/theme.scss",
    "bundleName": "material-dark",
    "inject": false
  },
  {
    "input": "src/assets/themes/aura/aura-light/blue/theme.scss",
    "bundleName": "aura-light",
    "inject": false
  },
  {
    "input": "src/assets/themes/aura/aura-dark/blue/theme.scss",
    "bundleName": "aura-dark",
    "inject": false
  },
  {
    "input": "src/assets/themes/bootstrap4/bootstrap4-light/blue/theme.scss",
    "bundleName": "bootstrap-light",
    "inject": false
  },
  {
    "input": "src/assets/themes/bootstrap4/bootstrap4-dark/blue/theme.scss",
    "bundleName": "bootstrap-dark",
    "inject": false
  }
],
```

### Ajouter le fichier css utilisé par l'app

Dans index.html *(noter dans href le thème par default)* :

```html
<link href="aura-light.css" id="app-theme" rel="stylesheet" type="text/css">
```

### Changer de thème

J'ai créé un composant avec des boutons pour switcher de thème.

```html
<div class="card flex justify-content-center gap-4">
    <p-button label="Aura-Light" [rounded]="true" severity="secondary" (click)="changeTheme('aura-light')" />
    <p-button label="Aura-Dark" [rounded]="true" severity="secondary" (click)="changeTheme('aura-dark')" />
    <p-button label="Material-Light" [rounded]="true" severity="secondary" (click)="changeTheme('material-light')" />
    <p-button label="Material-Dark" [rounded]="true" severity="secondary" (click)="changeTheme('material-dark')" />
    <p-button label="Bootstrap-Light" [rounded]="true" severity="secondary" (click)="changeTheme('bootstrap-light')" />
    <p-button label="Bootstrap-Dark" [rounded]="true" severity="secondary" (click)="changeTheme('bootstrap-dark')" />
</div>
<!-- Mettre dans changeTheme le bundleName défini dans angular.json -->
```

```typescript
import {Component} from '@angular/core';
import {ThemeService} from "../../core/services/theme.service";
import {Button} from "primeng/button";


@Component({
  selector: 'app-select-themes',
  standalone: true,
  imports: [
    Button
  ],
  templateUrl: './select-themes.component.html',
  styleUrl: './select-themes.component.scss'
})
export class SelectThemesComponent {
  constructor(private themeService: ThemeService) {
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme)
  }

}
```

### Terminé 🎉

Vous avez tout configuré ! Si vous rencontrez des difficultés, inspirez-vous du code disponible dans ce repo.


## 🏁 Conclusion

Vous savez maintenant comment ajouter des **thèmes dans PrimeNG pour Angular** ! Que ce soit pour utiliser des **thèmes gratuits PrimeNG** ou pour **créer un thème personnalisé**, vous disposez désormais des outils pour offrir une **expérience utilisateur personnalisée** à vos applications web.

N'hésitez pas à me faire parvenir vos suggestions ou questions sur cet article. 😉

---

🎉 Merci d'avoir lu jusqu'au bout !

📕 Vous pouvez parcourir mon blog pour découvrir d'autres sujets qui vous intéressent.  
➡️ [blog.tomwebdev.fr](http://blog.tomwebdev.fr)

🌐 Pour en savoir plus sur moi, visitez mon site Web.  
➡️ [tomwebdev.fr](http://tomwebdev.fr)
