function JsonStringify(obj){
	var dic_e = new Object();
	dic_e['\b'] = '\\b';
	dic_e['\f'] = '\\f';
	dic_e['\n'] = '\\n';
	dic_e['\r'] = '\\r';
	dic_e['\t'] = '\\t';
	dic_e['\"'] = '\\"';
	dic_e['\\'] = '\\\\';

	function stringify(obj){
		var i;
		var k;
		var s;
		var r;
		var num;
		var type = typeof(obj);
		if(type == "object"){
			if(!obj){
				return "null";

			// 配列
			}else if(obj.constructor == Array){
				s = "[";
				num = obj.length;
				for(i=0;i < num;i++){
					if(i)	s += ",";
					s += stringify(obj[i]);
				}
				return s + "]";

			// オブジェクト
			}else{
				r = false;
				s = "{";
				for(k in obj){
					if(r)	s += ",";
					else	r = true;
					s += stringify(k) + ":" + stringify(obj[k]);
				}
				return s + "}";
			}

		// 文字列
		}else if(type == "string"){
			s = '"';
			num = obj.length;
			for(i=0;i < num;i++){
				if(dic_e[obj.charAt(i)] != undefined){
					s += dic_e[obj.charAt(i)];
				}else{
					s += obj.charAt(i);
				}
			}

			return s + '"';

		// 数値
		}else if(type == "number"){
			if(isNaN(obj)) return "null";
			if(obj == Number.POSITIVE_INFINITY) return "null";
			if(obj == Number.NEGATIVE_INFINITY) return "null";
			return obj.toString();

		}else if(type == "boolean"){
			return obj.toString();
		}else if(type == "null" || type == "undefined"){
			return "null";
		}
		return null;
	}

	return stringify(obj);
}