const facts = [
  "En 1987, los gatos superaron a los perros como la mascota número uno en Estados Unidos.",
  "Los gatos que viven juntos a veces se frotan la cabeza para demostrar que no tienen intención de pelear. Los gatos jóvenes hacen esto con más frecuencia, especialmente cuando están emocionados",
  "Las mamás gatas enseñan a sus gatitos a usar la caja de arena.",
  "La manera en que tratas a los gatitos en las primeras etapas de vida va a determinar sus rasgos de personalidad más adelante.",
  "Contrario a la creencia popular, el gato es un animal social. Un gato como mascota reaccionará y responderá al habla y parece disfrutar de la compañía humana.",
  "Cuando se lo trata bien, un gato puede vivir veinte años o más, aunque el promedio de vida de un gato doméstico es de 14 años.",
  "Castrar a un gato extiende su expectativa de vida por dos o tres años.",
  "Los gatos, sobre todo mayores, pueden contraer cáncer. Muchas veces esta enfermedad puede ser tratada con éxito.",
  "Los gatos no sienten los sabores dulces.",
  "La dieta de los gatos debe contener grasa porque ellos no pueden producirla naturalmente.",
  "Algunas plantas domésticas comunes venenosas para los gatos son: hiedra inglesa, lirio, muérdago, filodendro y el tejo.",
  "Tanto el Paracetamol como el chocolate son nocivos para los gatos.",
  "Muchos gatos no pueden digerir la leche de vaca adecuadamente. La leche y los lácteos les causan diarrea.",
  "La porción promedio de comida para gatos es equivalente a cinco ratones.",
  "Los gatos pueden contraer tenias por comer pulgas. Estos gusanos viven dentro del gato para siempre, o hasta ser removidos con medicación. Se reproducen desprendiendo un eslabón del extremo de sus largos cuerpos. Este eslabón sale por el ano del gato y arroja cientos de huevos. Estos huevos son ingeridos por larvas de pulgas y el ciclo continúa. Los humanos también pueden contraer estos gusanos, pero sólo si comen las pulgas infectadas. Los gatos con tenias deben ser desparasitados por un veterinario.",
  "Los gatos pueden contraer tenias por comer ratones. Si tu gato atrapa un ratón es mejor quitarle el premio.",
  "Existe una forma de SIDA en gatos",
  "El color de los puntos de los gatos siameses está relacionado con el calor. Las áreas frías son más oscuras.",
  "Los gatos siameses nacen blancos por el calor dentro del útero de sus madres antes de nacer. Este calor impide el oscurecimiento de su pelo en las puntas.",
  "La gente que es alérgica a los gatos son en realidad alérgicos a su saliva y su caspa. Si el gato doméstico es bañado regularmente las personas alérgicas lo toleran mejor.",
  "Estudios demuestran que el alérgeno en gatos está relacionado con sus glándulas odoríferas. Los gatos tienen glándulas odoríferas en sus caras y en la base de sus colas. Los gatos machos son los que generan más olor. Si esta secreción de las glándulas odoríferas es el alérgeno, las personas alérgicas tolerarían mejor a las hembras castradas.",
  "Los gatos no piensan que son personitas. Ellos creen que nosotros somos gatos grandes. Esto influencia su comportamiento de diversas formas.",
  "Los gatos son susceptibles a la enfermedad de las encías y la caries dental. Deberían someterse a una limpieza dental con su veterinario o dentista gatuno una vez al año.",
  "Mucha gente teme contagiarse una enfermedad protozoaria, la toxoplasmosis, de los gatos. Esta afección puede causar enfermedad en el humano y, más seriamente, anomalías congénitas en el feto. La toxoplasmosis es una enfermedad común, a veces propagada a través de las heces de los gatos. Es causada comúnmente por la ingesta de carne vacuna cruda o poco cocida. Mujeres embarazadas y personas con el sistema inmunológico decaído no deberían tocar la caja de arena. Por lo demás, no hay otra razón por la que estas personas deban evitar a los gatos.",
  "El ancestro de todos los gatos domésticos es el gato montés africano, el cual persiste hasta hoy en día.",
  "En el antiguo Egipto, el matar a un gato era un crimen penado de muerte",
  "En el antiguo Egipto, los gatos eran momificados y se colocaban ratones embalsamados junto a ellos en sus tumbas. En una antigua ciudad, se encontraron más de 300.000 momias de gatos.",
  "En la Edad Media, durante la Fiesta de San Juan, los gatos eran quemados vivos en las plazas.",
  "La primera exposición felina fue en el año 1871 en el Palacio de Cristal en la ciudad de Londres.",
  "Hoy en día hay cerca de 100 razas distintas del gato doméstico.",
  "Como las aves, los gatos tienen una capacidad de encontrar el hogar que se sirve de su reloj biológico, el ángulo del Sol y el campo magnético de la Tierra. Un gato que es llevado lejos de su casa puede regresar a ella. Pero si su dueño se aleja del hogar, el gato no puede encontrarlo.",
  "Los gatos entierran sus heces para cubrir su rastro de depredadores.",
  "Los gatos duermen entre 16 a 18 horas por día. Mientras duermen, los gatos aún están alerta a estímulos entrantes. Si tocas la cola de un gato dormido, éste reaccionará acordemente.",
  "Además de oler con su nariz, los gatos pueden olfatear con un órgano adicional llamado el órgano de Jacobson, localizado en la cara superior de la boca.",
  "El cloro que se encuentra en el agua corriente irrita partes sensibles en la nariz del gato. Deja reposar el agua corriente por 24 horas antes de dársela a un gato.",
  "Abraham Lincoln amaba a los gatos. Tenía cuatro durante su estancia en la Casa Blanca.",
  "Julio César, Enrique II, Carlos XI y Napoleón le tenían miedo a los gatos",
  "Los gatos tienen en promedio 24 pelos en sus bigotes, organizados en cuatro filas horizontales en cada lado.",
  "La palabra 'gato' en varios idiomas: francés: chat; alemán: katze; italiano: gatto; español/portugués: gato; yidis: kats; maltés: gattus; sueco/noruego: katt; neerlandés: kat; islandés: kottur; griego: catta; hindú: katas; japonés: neko; polaco: kot; ucraniano: kotuk; hawaiano: popoki; ruso: koshka; latín: cattus; egipcio: mau; turco: kedi; armenio: gatz; chino: mao; árabe: biss; indonesio: kucing; búlgaro: kotka; malayo: kucing; tailandés/vietnamita: meo; rumano: pisica; lituano: katinas; checo: kocka; eslovaco: macka; vasco: catua; estonio: kass; finés: kissa; suajili: paka.",
  "¡Las estadísticas indican que los amantes de los animales han mostrado preferencia por los gatos sobre los perros en los últimos años!",
  "A los gatos se les puede enseñar a pasear con correa, sólo que se requiere mucho tiempo y paciencia para enseñarles. Cuanto más joven sea el gato, más fácil le será aprender.",
  "El ronroneo no siempre indica alegría. El ronronear podría sugerir que un gato tiene un dolor terrible como por ejemplo durante el parto. Los gatitos le ronronean a sus madres para hacerles saber que reciben suficiente leche durante la lactancia. El ronronear consiste en un proceso de inhalar y exhalar, comúnmente realizado con la boca cerrada. Pero no te preocupes, si tu gato ronronea mientras lo acaricias gentilmente y lo sostienes cerca tuyo - ¡es un gato feliz!",
  "La menta gatuna contiene un aceite llamado nepetalactona que en gatos causa efectos similares a los de la marihuana en personas. No todos los gatos reaccionan a ella pero los que lo hacen parecen entrar en un estado de trance. Una reacción positiva consiste en que el gato huela la menta gatuna, la lama, muerda, mastique, se frote y ruede sobre ella repetidamente, ronronee, maúlle e incluso salte por los aires.",
  "De todas las especies de gatos, el gato doméstico es la única raza capaz de mantener su cola vertical al caminar. Todas las especies de gatos salvajes mantienen su cola horizontal o entre las piernas al andar.",
  "Un gato feliz mantiene la cola alta y firme.",
  "Casi un 10% de los huesos de un gato se encuentran en su cola, la cual utiliza para mantener el equilibrio.",
  "Las familias gatunas usualmente se desempeñan mejor en números pares. Gatos y gatitos deberían adoptarse de a pares siempre que sea posible.",
  "El chocolate de repostería es el más peligroso para tu gato.",
  "El pulso de los gatos se mide desde la parte interior del muslo trasero, donde la pierna se une al cuerpo. Lo normal para los gatos es entre 110 y 170 pulsaciones por minuto.",
  "Los jaguares son los únicos grandes felinos que no rugen.",
  "El campo de visión de un gato es de alrededor de 185 grados.",
  "Los gatos tienen preferencias individuales con respecto a las superficies y ángulos de arañado. Algunos son rascadores horizontales mientras que otros ejercitan sus garras verticalmente.",
  "El Coon de Maine es la única raza estadounidense de pelo largo.",
  "El Coon de Maine es 4 a 5 veces más grande que el Singapura, la raza de gato más pequeña.",
  "Se cree que el gato atigrado o tabby obtiene su nombre de Attab, un distrito de Bagdad, actual capital de Irak.",
  "Las garras retráctiles son un fenómeno físico que distingue a los gatos del resto del reino animal. En los felinos, solo los guepardos no pueden retraer sus garras.",
  "No todos los gatos se intoxican con la menta gatuna. Que un gato reaccione o no a ella depende de un gen recesivo: sin gen, no hay goce.",
  "Un gato puede correr a unos cincuenta kilómetros por hora.",
  "En el antiguo Egipto, cuando fallecía un gato de la familia, todos sus miembros se afeitaban las cejas en señal de luto.",
  "Los gatos llevan domesticados la mitad de tiempo que los perros.",
  "Se cree que los bigotes del gato son una especie de radar que le ayuda a medir el espacio por donde va a caminar.",
  "Un gato puede pasarse cinco o más horas diarias acicalándose.",
  "Todos los gatos tienen tres grupos de pelos largos sensibles a la presión: los bigotes, las cejas y los pelos entre las almohadillas de sus patas.",
  "Tanto humanos como gatos tienen regiones similares en el cerebro encargadas de las emociones.",
  "El cerebro de un gato es más parecido al de un humano que al de un perro.",
  "Un gato tiene más huesos que un humano; los humanos tienen 206, mientras que los gatos 230.",
  "Los gatos poseen 30 vértebras: 5 más que los humanos",
  "Los gatos son la mascota más popular de los Estados Unidos: hay 88 millones de gatos como mascotas y 74 millones de perros.",
  "Los gatos tienen alrededor de 20 músculos encargados de controlar sus orejas",
  "A un grupo de gatos se le denomina 'clowder'.",
  "Hay gatos que han sobrevivido caídas desde más de 32 pisos (320 metros) sobre hormigón.",
  "Los gatos duermen el 70% de sus vidas.",
  "Un gato ha sido alcalde de Talkeetna, Alaska, durante 15 años. Se llama Stubbs.",
  "Un gato se presentó como candidato a la alcaldía de Ciudad de México en 2013.",
  "En los tigres y los gatos atigrados, la parte central de la lengua está cubierta de espinas que apuntan hacia atrás, utilizadas para desgarrar y sujetar la carne.",
  "Cuando los gatos hacen muecas, éstas suelen ser 'gustativas'. Tienen un órgano extra que, con cierto control de la respiración, permite a los gatos percibir el sabor del aire.",
  "Los gatos no son capaces de saborear lo dulce.",
  "Tener un gato puede reducir en un tercio el riesgo de derrames e infartos.",
  "Wikipedia tiene una grabación de un gato maullando porque... ¿por qué no?",
  "El gato más largo del mundo medía 123 centímetros de largo. https://www.youtube.com/watch?v=gc5M0aGc_EI",
  "La evidencia sugiere que los gatos domésticos han estado presentes desde el 3600 a.C., 2.000 años antes que los faraones egipcios.",
  "El ronroneo de un gato puede ser una forma de sanación, ya que puede ser señal tanto de nerviosismo como de satisfacción. Asimismo, la frecuencia del ronroneo de un gato doméstico es la misma con la que se reparan los músculos y los huesos.",
  "Los gatos adultos solo maúllan para comunicarse con los humanos.",
  "El gato más rico del mundo está valuado en 13 millones de dólares tras fallecer su humano y dejarle su fortuna.",
  "Tu gato reconoce tu voz pero se hace el que no le importas (seguro está muy ocupado).",
  "Los gatos suelen ser intolerantes a la lactosa, ¡así que deja de darles leche!",
  "Los gatos pueden saltar hasta seis veces su longitud.",
  "Los gatos han contribuido a la extinción de 33 especies diferentes.",
  "Los gatos pueden llegar a beber agua de mar para sobrevivir.",
];

const langName = "spanish",
  langISO = "esp",
  langLocale = "mx",
  langLocaleName = "mexican";

module.exports = {
  langName,
  langISO,
  langLocale,
  langLocaleName,
  code: `${langISO}-${langLocale}`,
  codeName: `${langName} (${langLocaleName})`,
  facts: facts,
};
