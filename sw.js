if ("serviceWorker" in navigator) {
          window.addEventListener("load",functional() {
                    navigator.serviceWorker
                    .register("./generate-sw.js")
                    .then(res=> console.log("service worker registered"))
                    .catch(err => console.log("servie woker not registred", err))
          })
)
