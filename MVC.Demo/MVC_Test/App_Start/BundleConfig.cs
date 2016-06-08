using System.Web;
using System.Web.Optimization;

namespace MVC_Test
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/vendor/angular.min.js",
                      "~/Scripts/vendor/angular-route.min.js"));
            
            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                      "~/Scripts/app/app-startup.js",
                      "~/Scripts/app/common/*.js",
                      "~/Scripts/app/models/*.js",
                      "~/Scripts/app/factories/*.js",
                      "~/Scripts/app/services/*.js",
                      "~/Scripts/app/filters/*.js",
                      "~/Scripts/app/directives/*.js",
                      "~/Scripts/app/controllers/*.js",
                      "~/Scripts/app/app.js"));
        }
    }
}
