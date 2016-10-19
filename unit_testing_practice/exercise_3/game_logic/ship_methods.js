function checkForShip (player, coordinates) {
  var shipPresent, ship

  for (var i = 0; i < player.ships.length; i++) {
    ship = player.ships[i]

    // Compare actual ship coordinates with the given coordinates, only check the first result '[0]' for now
    shipPresent = ship.locations.filter(function (actualCoordinate) {
      return actualCoordinate[0] === coordinates[0] && actualCoordinate[1] === coordinates[1]
    })[0]

    if (shipPresent) {
      return ship
    }
  }
  // If we got this far, no coordinates matched. No hits
  return false
}

// Damage the given ship
function damageShip (ship, coordinates) {
  ship.damage.push(coordinates)
}

// Fire on the given player at the given coordinates. If one of the player's
// ships exists there, damage the appropriate ship
function fire (player, coordinates) {
  var ship = checkForShip(player, coordinates)

  if (ship) {
    damageShip(ship, coordinates)
  }
}

module.exports.checkForShip = checkForShip
module.exports.damageShip = damageShip
module.exports.fire = fire
