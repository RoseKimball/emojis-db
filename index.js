// import db.json
const DB = require('./db.json'); 

/**
 * 
 * @param {string} name 
 * @returns object
 * @description finds and returns an emoji by name
 */

function findByName(name) {
  const foundName = DB.find(function(emoji) {
    return emoji.name === name;
  });
  return foundName;
} 

exports.findByName = findByName;

/**
 * 
 * @param {string} subgroup 
 * @returns array
 * @description finds and returns an array of emojis by subgroup
 */

function findBySubgroup(subgroup) {
  const foundSubgroup = DB.filter(emoji => {
    return emoji.subgroup === subgroup; 
  });
  return foundSubgroup;
}

exports.findBySubgroup = findBySubgroup;

/**
 * 
 * @returns array
 * @description finds and returns an array of all available emojis
 */

function findAll() {
  return DB;
}

exports.findAll = findAll;

/**
 * 
 * @param {string} codes 
 * @returns object
 * @description finds and returns an emoji by code
 */

function findByCode(codes) {
  const foundByCode = DB.find(function(emoji) {
    return emoji.codes === codes; 
  });
  return foundByCode;
} 

exports.findByCode = findByCode;