'use strict';
var dmitri = dmitri || {};

dmitri.models = {
	proton: {
		geometry: new THREE.SphereGeometry( 1, 32, 32 ),
		material: new THREE.MeshLambertMaterial( {color: 0xb92d19} )
	},
	neutron: {
		geometry: new THREE.SphereGeometry( 1, 32, 32 ),
		material: new THREE.MeshLambertMaterial( {color: 0xcccccc} )
	},
	electron: {
		geometry: new THREE.SphereGeometry( 0.3, 32, 32 ),
		material: new THREE.MeshLambertMaterial( {color: 0xaaaaff} )
	},
	shells: [
		{x: 0,	y: 1,		z: 0},
		{x: 0,	y: -1,	z: 0},
		{x: 1,	y: 0,		z: 0},
		{x: -1,	y: 0,		z: 0},
		{x: 0,	y: 1,		z: 0},
		{x: 0,	y: -1,	z: 0}, // 6
		{x: 0,	y: 1,		z: 0},
		{x: 0,	y: 1,		z: 0},
		{x: 0,	y: 1,		z: 0},
		{x: 0,	y: 1,		z: 0},
		{x: 0,	y: 1,		z: 0},
		{x: 0,	y: 1,		z: 0},
		{x: 0,	y: 1,		z: 0},
		{x: 0,	y: 1,		z: 0},
		{x: 0,	y: 1,		z: 0},
		{x: 0,	y: 1,		z: 0},
	]
};