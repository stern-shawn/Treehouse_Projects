Test suite completed
# TOC
   - [Mocha](#mocha)
   - [PLAYER METHODS](#player-methods)
     - [validateLocation](#player-methods-validatelocation)
     - [validateLocations](#player-methods-validatelocations)
     - [placeShip](#player-methods-placeship)
   - [SHIP METHODS](#ship-methods)
     - [checkForShip](#ship-methods-checkforship)
     - [damageShip](#ship-methods-damageship)
     - [fire](#ship-methods-fire)
<a name=""></a>

<a name="mocha"></a>
# Mocha
should run our tests using npm.

```js
expect(true).to.be.ok
```

<a name="player-methods"></a>
# PLAYER METHODS
<a name="player-methods-validatelocation"></a>
## validateLocation
shoud confirm valid for unoccupied locations in range.

```js
var location = [0, 0]
var actual = validateLocation(player, location)
expect(actual).to.be.ok
```

shoud confirm INvalid for occupied locations in range.

```js
var location = [9, 9]
var actual = validateLocation(player, location)
expect(actual).to.be.false
```

shoud confirm INvalid for UNoccupied locations OUT of range.

```js
var locationHigh = [10, 10]
var locationLow = [-1, -1]
expect(validateLocation(player, locationHigh)).to.be.false
expect(validateLocation(player, locationLow)).to.be.false
```

<a name="player-methods-validatelocations"></a>
## validateLocations
should correctly report a list of unoccupied locations is valid.

```js
var locations = [[1, 1], [1, 2], [1, 3], [1, 4]]
expect(validateLocations(player, locations)).to.be.ok
```

should correctly report a a problem if any location in the list is invalid.

```js
var locations = [[1, 1], [1, 2], [1, 3], [10, 10]]
expect(validateLocations(player, locations)).to.be.false
locations = [[1, 1], [1, 2], [1, 3], [0, 0]]
expect(validateLocations(player, locations)).to.be.false
```

<a name="player-methods-placeship"></a>
## placeShip
should update a ship with a valid starting location.

```js
var ship = player.ships[0]
var coordinates = [0, 1]
placeShip(player, ship, coordinates, 'horizontal')
var actual = ship.locations
expect(actual).to.be.ok
expect(actual).to.have.length(1)
expect(actual[0]).to.deep.equal([0, 1])
```

should throw an error if no direction is specified.

```js
var ship = player.ships[0]
var coordinates = [0, 1]
// Initialize the function being tested inside of a handler so we can
// catch the error and check it with Chai's .throw() test
var handler = function () { placeShip(player, ship, coordinates) }
expect(handler).to.throw(Error)
expect(handler).to.throw('No direction specified!')
```

<a name="ship-methods"></a>
# SHIP METHODS
<a name="ship-methods-checkforship"></a>
## checkForShip
should correctly report no ship at a given players coordinate.

```js
expect(checkForShip(player, [9, 9])).to.be.false
```

should correctly report a ship at the given coordinates.

```js
expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0])
```

should handle ships located at more than one coordinate.

```js
expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0])
expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0])
expect(checkForShip(player, [9, 9])).to.be.false
```

should handle checking multiple ships.

```js
expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0])
expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0])
expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1])
expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1])
expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2])
expect(checkForShip(player, [9, 9])).to.be.false
```

<a name="ship-methods-damageship"></a>
## damageShip
should register damage on a given ship at a given location.

```js
var ship = {
  locations: [[0,0]],
  damage: []
}
damageShip(ship, [0,0])
expect(ship.damage).to.not.be.empty
expect(ship.damage[0]).to.deep.equal([0,0])
```

<a name="ship-methods-fire"></a>
## fire
should record damage on given ship at a given coordinate.

```js
fire(player, [0, 0])
expect(player.ships[0].damage[0]).to.deep.equal([0,0])
```

should not record damage if no ship at given coordinates.

```js
fire(player, [9, 9])
expect(player.ships[0].damage).to.be.empty
```
