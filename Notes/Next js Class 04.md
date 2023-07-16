Routing in React app:-
    ->Install a third party package 
    ->routes.js files to configure the routes.
    ->For each route,create a component file,export the component,import it in routes.js
    and configure the new routes with a path property.
Routing in Next app:-
    ->File-system based routing mechanism.
    ->When a file is added to the pages folder in the project,it automatically available as a route.
    ->By mixing and matching file names with a nested folder structure,it is possible to pretty much define the most common routing patterns.

    i.Route with pages 
    ii.nested routes
    iii.Dynamic routes
    iv.Catch-all routes
    v.navigate from the ui
    vi.Programatically navigate btw pages.


i.Route with pages:-
    When you generate a file inside pages folder it is automatically avalable as route.
    Let's create two file in the pages folder.
        1.about.js
            <!-- const About=()=>{
            return <div>About Page</div>
            }
            export default About -->
        2.profile.js
            <!-- const Profile=()=>{
            return <div>Profile Page</div>
            }
            export default Profile -->
    To see this page in web just type /profile or /abut.
ii.Nested routes:-
    U can create nested routes by creating nested folder and files.See next-app-04.
iii.Dynamic Routing:-
    See next-app-04 product example to understand.
iv.Catch All routes:-
    If we want to show the same page for parent route also,then we have to make [...params] to [[...params]] 
v.Navigating though UI:-
    Link component helps in navigating one route to other.
    First u have to import the link component and the command for this is :-
        import Link from "next/link"
    U can see next-app-05 for more.
    ->Link component take an attribute "replace".It is used to replace the current history.It doesn't add new url in browser history stack.
vi.Programatically navigating:-
    <!-- import { useRouter } from "next/router";
    const Home=()=>{
      const router=useRouter();
      const handleClick=()=>{
        console.log("moving to product page");
        router.push("/product");
        // or router.replace("/product")
      }
      return <div>
          <h1>Home Page</h1>
          <button onClick={handleClick}>Product Page</button>
        </div>
    }
    export default Home -->
vii.Defining Custom 404 page:-
    If we navigate to a page or route which is not present in our next app then next renders a default 404 page showing page not found.
    How ever we can customize the 404 page.
    Steps:-
          Create a 404.js file in pages folder.
          Create a custom error component.
          Export the component.
    