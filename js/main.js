

	var firebaseRef = new Firebase("https://testedebanco-d5f43.firebaseio.com/");


		function criarJson() {
			firebaseRef.set(
				{
					"lutadores": {
						"blanka": {
							"magia":"Electric Thunder"
						},
						"ryu": {
							"magia":"Hadouken"
						},
						"sagat": {
							"magia":"Tiger Uppercut"
						}
					}
				}
			);
		}

    function atualizarMagiaBlanka() {
    		var refBlanka = firebaseRef.child("lutadores/blanka");
    		refBlanka.update({
    			"magia": "Rolling Attack"
    		});
    	}

      firebaseRef.on("value", function(snapshot) {
	    mostrarJson(snapshot.val());
	});

	function mostrarJson(json) {
	    document.getElementById("jsonOut").innerHTML = JSON.stringify(json);
	}
