Pre-rendering and Data fetching:-
    React vs Next:-
        Next js pre renders every page in our application where react is not.
    Pre-render Meaning:-
        Next js generates Html for each page in advance instead of having all done by client side javascript.
    Why prerendering:-
        1.Pre render improve performance.
            ->In react app,u need to wait for the Javascript to be executed.
            ->Perhaps fetch data from an external api and then render the UI
            ->There is a wait time for the user
            ->with a pre-rendered page the Html is already generated and loads faster.
        2.Pre-rendering helps with SEO.
            ->if u are building a blog or an e-commerce site.SEO is a concern.
            ->With the react app,if the search engine hits your page. It only see a div tag with id equal to root.
            ->If search engine hits a pre-rendered page though,all the content is present in the source code which will help index that page.
Next js supports two forms of pre-rendering.
    -Static Generation 
    -Server-side rendering


    a.Static Generation:-
        ->It is a method of pre-rendering where Html pages are generated at build time.
        ->The Html with all the data that makes up the content of the web page are generated in advance when you build ur application.
        ->Recomended method to prerender pages whenever possible
        ->Page can built once,catched by a CDN and served to the client side almost instantly.
    Static generation with data:-
        See next-app-6 for example.
        getStaticProps:-
            1.getStaticProps runs on the server side.So if you write console.log() inside it then the result can be seen in terminal not in the browser console.
            2.You have to named export it.
            3.You can write serverside code directly in getStaticProps.
            4.Accessing file system using the fs module or querying a database can be done inside getStaticProps.
            5.it is allowed only in a page and cannot be run from a regular component file
            6.It is used only for pre-rendering and not client side data fetching.
            7.It should return an object and the object should contain a key which is an object.
            8.it will run at build time.
            9.during development,it runs on every request.
        Note:-
            For dynamic route  u have to write getStaticPaths() and export it. You can see the next-app-06 post example for better understanding.
            In the return statement of getStaticPaths there is a key called fallback whose value is a boolean .Lets see what it is doing.
                Case-1:-fallback set to false->

