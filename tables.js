//get the API data for the table reservations here
//JSON query

for (var i = 0; i < reservations.length; i++) {
//the path for the items to be displayed will need to be changed depending on how the data is pulled.
//listing individual reservations with their ID, name
	
	var newReservation = $('<div></div>');
	newReservation.addclass('well');
		
	var reservationID = $('<div></div>');
	reservationID.addClass('btn btn-primary btn-lg col-sm-1');
	reservationID.append(reservation[i].id);

	var reservationItems = $('<div></div>');
	reservationItems.addClass('col-sm-11');
	reservationItems.append(reservation[i].name);

	newReservation.append(reservationID).append(reservationItems);

	$('#tableSection').append(newReservation);
}