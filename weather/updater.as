package 
{
	import flash.external.HostObject;
	public class updater
	{	
		[Embed(source="./process.jsx", mimeType="application/octet-stream")]
		private static var EsInitClass: Class;

		public static function run(xmlStr:String):Boolean 
		{
			var scriptObject: Object = new EsInitClass();
			var initScript: String = scriptObject.toString();
			var myBridgeScript : HostObject = HostObject.getRoot(HostObject.extensions[0]);
			
			myBridgeScript.eval(initScript);
			return myBridgeScript.processXML(xmlStr);
		}
	}
}