#
##
## For at kører dette program skal man have et IDE installeret på sin maskine. IDE er et integreret udviklings miljø. som Webstorm eller Eclipse


1. Download zip-filen der indeholder klient og server .
2. Anvend et IDE til at åbne både klient og server
3. Importer databasen i et program der kan håndterer SQL.
- Filen findes på serveren --> resources --> project_eva_2016-10-29-sql.
4. Impoter Maven til serveren, den popper selv op i hjørnet og spørg om du vil impoterer det.
5. I config.json filen skal: "DB_USER":"root",
                        og:  "DB_PASS":"",
    ændres til den MySQL brugernavn og adgangskoden for at få adgang til databasen.
6. Inden man kører programmet skal udkommenteringen af CBSParser i run klassen fjernes, og efter programmet er kørt skal den udkoomenteres igen.
Dette skal man kun gøre aller første gang man starter programmet, for at få CBS data hentet ned i databasen.
7. Serveren startes inde fra Run klassen.
8. På klienten skal man være opmærksom på at serverURL: i toppen af SDK klassen, har samme port som serveren.
9. På klient siden starter man programmet ved at højre klikke på login.html klassen og trykker "open in webbrowser"
10. Det hele burde nu kører og man burde kunne logge ind med en bruger fra databasen.