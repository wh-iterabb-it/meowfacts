meowfacts
=========

[![Issues](https://img.shields.io/github/issues/wh-iterabb-it/meowfacts.svg)](https://github.com/wh-iterabb-it/meowfacts/issues)
[![License](https://img.shields.io/badge/license-GPL-blue.svg)](https://github.com/wh-iterabb-it/meowfacts/blob/main/LICENSE)
![Known Vulnerabilities](https://snyk.io/test/github/wh-iterabb-it/meowfacts/badge.svg) 
[![codecov](https://codecov.io/gh/wh-iterabb-it/meowfacts/branch/main/graph/badge.svg)](https://codecov.io/gh/wh-iterabb-it/meowfacts)


## Description:

A simple api that returns a random fact about cats on a GET request

### Example Usage

``` 
curl https://meowfacts.herokuapp.com/
```

Response

```json
{
  "data": [
    "0": 	"Mother cats teach their kittens to use the litter box."
  ]
}
```


### Advanced Usage

You can request more than one fact at a time by using the GET param `count`

```bash
curl https://meowfacts.herokuapp.com/?count=3
```

Response

```json
{
  "data": [
    "0": 	"Mother cats teach their kittens to use the litter box.",
    "1": "A cat can sprint at about thirty-one miles per hour.",
    "2": "The worlds richest cat is worth $13 million after his human passed away and left her fortune to him."
  ]
}
```

You can request a specific fact if you know the ID / order it is buy passing the GET param `id`

```bash
curl https://meowfacts.herokuapp.com/?id=3
```

Response

```json
{
  "data": [
    "0": 	"Mother cats teach their kittens to use the litter box."
  ]
}
```

### Language Support 

You can request the response in different languages by using the GET param `lang`

```bash
curl https://meowfacts.herokuapp.com/?lang=ukr
```

Response

```json
{
  "data": [
    "0": 	"Найбагатший у світі кіт коштує 13 мільйонів доларів після того, як його людина померла і залишила йому свій стан"
  ]
}
```

#### Supported Languages

The supported languages are listed below, you can use any of the `lang Values` in the first column as a `lang` param. 

"?lang=esp" and "?lang=esp-mx" will both return spanish for your response, and simply using the `ISO-639-1` code will default to esp-mx for simplicity. 

| LANG Variable | [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) | Language Name | Localization (country) |
| :---: | :---: | :---: | :---: |
| `eng-us`  | `eng` | English | USA |
| `ces-cz` or `cze-cz` | `cze` (B) `ces` (T) | Czech | CZ |
| `ger-de`  | `ger` | German | DE |
| `esp-es`  | `esp` | Spanish | ES |
| `esp-mx`  | `esp` | Spanish (default) | MX |
| `rus-ru`  | `rus` | Russian | RUS |
| `por-br`  | `por` | Portuguese | BR |
| `tl-fil`  | `fil` | Filipino | PH |
| `ukr-ua`  | `ukr` | Ukrainian | UA |
| `urd-ur`  | `urd` | Urdu | UR |
| `ita-it`  | `ita` | Italian | IT |
| `zho-tw` | `zho` | Chinese | TW (Taiwan) |


<details>
  <summary>Help us expand and improve Internationalization on this API  (Click to expand)</summary>
  <h3>Help us expand and improve Internationalization on this API</h3>
  
  <p><b>Note:</b> We are trying to follow the browser's language tags, which are formally defined in <a href="https://datatracker.ietf.org/doc/html/rfc5646">RFC 5646</a>, which rely on the <a href="https://en.wikipedia.org/wiki/ISO_639">ISO 639</a> standard (quite often the <a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">639-1 code list</a>) for <a href="https://en.wikipedia.org/wiki/Language_code">language codes</a> to be used.</p> 

<p>We would love it if you helped this project by taking a look at our <a href="https://github.com/wh-iterabb-it/meowfacts/issues/175">Call for Contributors</a> to see if you can make a contribution that helps us be more inclusive and support more languages. </p>
</details>


### Documentation

<div align="center">
  <p>
    <a href="https://app.swaggerhub.com/apis-docs/wh-iterabb-it/meowfacts/1.0.0">
      <img width="200" height="72" src="https://raw.githubusercontent.com/swagger-api/swagger.io/wordpress/images/assets/SW-logo-clr.png" />
    </a>
  </p>
  <p>
    <a href="https://rapidapi.com/wh-iterabb-it-wh-iterabb-it-default/api/meowfacts/">
      <img width="200" height="52" src="https://rapidapi.com/static-assets/default/dark-logo-78e48dc1-ca3f-4d67-a6f5-74032f439c8b.svg" />
    </a>
  </p>
</div>


## Local Development

### Installation

```
npm install
```

Basic usage

```
npm run start
```

### Dedication && Funding




<div align="center">
<p>This api is dedicated to pistachio; she brought me great comfort in dire times. Words can't describe the debt I owe to her. </p>
  <img width="500" height="500" alt="My cat, Sleeping on her back on a table, she did this everywhere because the fan would cool her belly." src="https://i.imgur.com/2EGh2Bp.jpg" />
  <p>If you enjoy this api, or just love cats, please donate to:</p>
  <p><a href="https://www.animalprojectnyc.org/">NYC Animal Project Website</a></p>
  <p><a href="https://www.paypal.me/animalproject">NYC Animal Project Paypal Link</a></p>
  
  <p align="justify"><strong>NYC Animal Project</strong> is a struggling `no kill` cat shelter in the heart of new york that relies entirely on fosters and help from small donations. I can say personally having volunteered for them, even a few cents donation would make a difference for the very small organization. I fostered many kittens from them, and Pistachio was the runt that went un-adopted. She was shy, but very outgoing when she got settled. I highly recommend to foster and adopt if you can.</p>

</div>


