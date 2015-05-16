/**
 * Controlleur interne à la section 1
 *
 */

'use strict';

angular.module('hyblabApp')
  .controller('Section1Ctrl', function($scope) {

    console.log('Chargement du controlleur section1');

    $('#map').vectorMap({
      map: 'fr_mill_en',
      zoomButtons: false,
      backgroundColor: 'none',
      regionsSelectable: false,
      zoomOnScroll: false,
      regionStyle: {
        initial: {
          fill: '#1D1D1B'
        }
      },
      markers: [{
        latLng: [47.2172500, -1.5533600],
        name: 'Nantes'
      }],
      markerStyle: {
        initial: {
          fill: 'rgba(231,55,84,1)',
          stroke: 'none',
          'fill-opacity': 1,
          'stroke-width': 1,
          'stroke-opacity': 1,
          r: 6
        },
        hover: {
          stroke: '#eee',
          'stroke-width': 2,
          cursor: 'pointer'
        },
        selected: {
          fill: 'blue'
        },
        selectedHover: {}
      },
      markerLabelStyle: {
        initial: {
          'font-family': 'Lato',
          'font-size': '16',
          'font-weight': '400',
          cursor: 'default',
          fill: 'black'
        },
        hover: {
          cursor: 'pointer'
        }
      }
    });



    var dv2 = {
      data: [{
        value: 300,
        color: 'rgba(231,55,84,1)',
        title: 'Femmes'
      }, {
        value: 700,
        color: 'rgba(29,29,27,1)',
        title: 'Hommes'
      }],
      options: {
        segmentShowStroke: false,
        animateRotate: true,
        animateScale: true,
        animationByData: false,
        animationSteps: 100,
        animationEasing: 'linear',
        canvasBorders: false,
        graphTitle: '',
        legend: false,
        inGraphDataShow: false,
        annotateDisplay: true,
        spaceBetweenBar: 0,

        responsive: true
      }
    };





    var dv3 = {
      data: {
        labels: ['Espoir ', 'Junior ', 'Sénior ', 'Vétéran 1 ', 'Vétéran 2 ', 'Vétéran 3 ', 'Vétéran 4 ', 'Vétéran 5 '],
        datasets: [{
          fillColor: 'rgba(29,29,27,1)',
          strokeColor: 'rgba(29,29,27,1)',
          pointColor: 'rgba(29,29,27,0.5)',
          pointstrokeColor: 'transparent',
          data: [95, 53, 99, 10, 73, 27, 82, 80],
          title: 'Hommes'
        }, {
          fillColor: 'rgba(231,55,84,1)',
          strokeColor: 'rgba(231,55,84,1)',
          pointColor: 'rgba(231,55,84,0.5)',
          pointstrokeColor: 'transparent',
          data: [35, 43, 59, 25, 31, 50, 66, 3],
          title: 'Femmes'
        }]
      },
      options: {
        animationStartWithDataset: 1,
        animationStartWithData: 1,
        animationLeftToRight: true,
        animationByDataset: true,
        animationSteps: 100,
        animationEasing: "linear",
        canvasBorders: false,
        graphTitle: '',
        legend: false,
        datasetFill: false,
        scaleShowLabels: false,
        scaleShowLine: false,
        scaleLineColor: "rgba(0,0,0,.0)",
        scaleLineWidth: 0,
        scaleOverlay: false,
        scaleFontFamily: "sans-serif",
        scaleFontSize: 14,
        scaleFontStyle: "normal",
        scaleFontColor: "#222",
        inGraphDataShow: false,
        annotateDisplay: true,
        annotateLabel: "<%=v3 + ' ' + (v1 == '' ? '' : v1) + (v1!='' && v2 !='' ? ' ' : '')+(v2 == '' ? '' : v2)+(v1!='' || v2 !='' ? ' ' : '')%>",
        scaleShowGridLines: false,
        rotateLabels: "smart",
        responsive: true

      }
    };

    var dv3Diagram = new Chart(document.getElementById('dv3').getContext('2d')).StackedBar(dv3.data, dv3.options);

    var dv4 = {
      data: {
        labels: ['Départ'],
        datasets: [{
          fillColor: 'rgba(29,29,27,0.5)',
          strokeColor: 'rgba(29,29,27,0.5)',
          pointColor: 'rgba(231,55,84,0.5)',
          pointstrokeColor: 'transparent',
          data: [10],
          title: 'Arrivée du premier'
        }, {
          fillColor: 'rgba(29,29,27,1)',
          strokeColor: 'rgba(29,29,27,1)',
          pointColor: 'rgba(29,29,27,0.5)',
          pointstrokeColor: 'transparent',
          data: [15],
          title: 'Arrivée du dernier'
        }]
      },
      options: {
        scaleShowLabels: false,
        barShowStroke: false,
        animationStartWithDataset: 1,
        animationStartWithData: 1,
        animationSteps: 100,
        canvasBorders: false,
        graphTitle: '',
        legend: true,
        legendBorders: false,
        legendPosX: 3,
        legendPosY: 2,
        legendFontFamily: 'sans-serif',
        legendFontSize: 12,
        maxLegendCols: 1,
        legendFillColor: '#eee',
        inGraphDataShow: true,
        inGraphDataTmpl: "<%=v3 + ' min'%>",
        inGraphDataFontFamily: "'Arial'",
        inGraphDataFontSize: 14,
        inGraphDataFontColor: "#222",
        annotateDisplay: false,
        scaleShowGridLines: false,
        scaleOverride: true,
        scaleSteps: 2,
        scaleStepWidth: 10,
        scaleStartValue: 0
      }
    };

    var dv4Diagram = new Chart(document.getElementById('dv4').getContext('2d')).HorizontalBar(dv4.data, dv4.options);





  });
