const stars = function stars(count) {
	      let s = "*";
	      for (let j = 1; j < count; j++) {
	          s += "*";
	      };
	      return s;
	  };



const spaces = function spaces(count) {
	      let sp = " ";
	      for (let i = 1; i < count; i++) {
	          sp += " ";
	      };
	      return sp;
	  };

	  

	  const diamond = function diamond(m) {
	      if (m % 2 === 0) {
	          m = m + 1;
	      }
	      let spsum = m - 1,
	          ssum = 1;
	      const sum = (m + 1) / 2;
	      for (let l = 1; l <= sum; l++) {
	          console.log(spaces(spsum) + stars(ssum));
	          spsum = spsum - 1;
	          ssum = ssum + 2;
	          if (l === sum) {
	              let ssumrev = ssum - 2,
	                  spsumrev = spsum + 1;;
	              for (let a = sum; a < m; a++) {
	                  spsumrev = spsumrev + 1;
	                  ssumrev = ssumrev - 2;
	                  console.log(spaces(spsumrev) + stars(ssumrev));
	              };
	          }

	      };
	  };

	  diamond(18);