function checkForShip (player, coordinates) {
  var shipPresent, ship

  for (var i = 0; i < player.ships.length; i++) {
    ship = player.ships[i]

    // Compare actual ship coordinates with the given coordinates, only check the first result '[0]' for now
    shipPresent = ship.locations.filter(function (actualCoordinate) {
      return actualCoordinate[0] === coordinates[0] && actualCoordinate[1] === coordinates[1]
    })[0]

    if (shipPresent) {
      return true
    }
  }
  // If we got this far, no coordinates matched. No hits
  return false
}

module.exports.checkForShip = checkForShip
