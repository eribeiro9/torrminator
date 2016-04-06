Kickass = require 'kickass-torrent'
{ Meteor } = require 'meteor/meteor'

Meteor.methods
  searchKickass: (search) -> Kickass search, (err, res) -> err ? res
