package sp.datagrid;

import static jsweet.dom.Globals.window;

import java.util.function.BiConsumer;
import java.util.function.Consumer;

import def.js.Promise;
import jsweet.lang.Array;
import jsweet.lang.Date;
import jsweet.lang.Object;

public class MockHomePageService implements HompPageService {

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Promise<Array<Object>> getFilters(String objectType) {
		Object filter = (Object) window.$get("samplefilter");
		Object filter1 = (Object) window.$get("samplefilter1");
		Array<Object> result = new Array<Object>();
		result.push(filter);
		result.push(filter1);
		BiConsumer<Consumer<Array<Object>>, Consumer<Object>> consu = new BiConsumer<Consumer<Array<Object>>, Consumer<Object>>() {
			public void accept(Consumer<Array<Object>> t, Consumer<Object> u) {
				t.accept(result);
			}
		};
		return new Promise(consu);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Promise<Array<jsweet.lang.Object>> getRecordTypes(String objectType) {
		Array<Object> result = (Array<Object>) window.$get("recordtypes");
		BiConsumer<Consumer<Array<Object>>, Consumer<Object>> consu = new BiConsumer<Consumer<Array<Object>>, Consumer<Object>>() {
			public void accept(Consumer<Array<Object>> t, Consumer<Object> u) {
				t.accept(result);
			}
		};
		return new Promise(consu);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Promise<String> changeOwner(String ownerId, Array<String> caseIds) {
		BiConsumer<Consumer<String>, Consumer<Object>> buc = new BiConsumer<Consumer<String>, Consumer<Object>>() {

			@Override
			public void accept(Consumer<String> t, Consumer<Object> u) {
				t.accept("Success");
			}

		};

		return new Promise(buc);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Promise<String> closeCases(String status, Array<String> caseIds) {
		BiConsumer<Consumer<String>, Consumer<Object>> buc = new BiConsumer<Consumer<String>, Consumer<Object>>() {

			@Override
			public void accept(Consumer<String> t, Consumer<Object> u) {
				t.accept("Success");
			}

		};

		return new Promise(buc);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Promise<String> mergeCases(Array<String> caseIds) {
		BiConsumer<Consumer<String>, Consumer<Object>> buc = new BiConsumer<Consumer<String>, Consumer<Object>>() {

			@Override
			public void accept(Consumer<String> t, Consumer<Object> u) {
				t.accept("Success");
			}

		};

		return new Promise(buc);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Promise<String> pinFilter(String filterId, String objectType) {
		BiConsumer<Consumer<String>, Consumer<Object>> buc = new BiConsumer<Consumer<String>, Consumer<Object>>() {

			@Override
			public void accept(Consumer<String> t, Consumer<Object> u) {
				t.accept("Success");
			}

		};

		return new Promise(buc);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Promise<Object> createNewFilter(String objectType, String label) {
		Object filter = (Object) window.$get("samplefilter");

		BiConsumer<Consumer<Object>, Consumer<Object>> buc = new BiConsumer<Consumer<Object>, Consumer<Object>>() {

			@Override
			public void accept(Consumer<Object> t, Consumer<Object> u) {
				t.accept(filter);
			}

		};

		return new Promise(buc);
	}

	@Override
	public Promise<Object> deleteFilter(String IdToDelete) {
		return createNewFilter(null, null);
	}

	@Override
	public void renameFilter(String IdToRename, String label) {

	}

	@Override
	public Promise<Object> cloneFilter(String IdToClone, String label) {
		return createNewFilter(IdToClone, label);
	}

	@Override
	public Promise<Object> updateFilter(String filter, String filterId) {
		return createNewFilter(filter, filterId);
	}

	@Override
	public Promise<Object> getDefaultFilter(String objectType) {
		return createNewFilter(objectType, objectType);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Promise<Array<Object>> getCases(Integer page, String filter, String objectType, String filterId) {

		Array<Object> result = (Array<Object>) window.$get("cases");
		BiConsumer<Consumer<Array<Object>>, Consumer<Object>> consu = new BiConsumer<Consumer<Array<Object>>, Consumer<Object>>() {
			public void accept(Consumer<Array<Object>> t, Consumer<Object> u) {
				t.accept(result);
			}
		};

		return new Promise(consu);

	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Promise<Array<Object>> getCustomerPortalUsers() {
		Array<Object> result = (Array<Object>) window.$get("portalusers");
		BiConsumer<Consumer<Array<Object>>, Consumer<Object>> consu = new BiConsumer<Consumer<Array<Object>>, Consumer<Object>>() {
			public void accept(Consumer<Array<Object>> t, Consumer<Object> u) {
				t.accept(result);
			}
		};

		return new Promise(consu);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Promise<Array<Object>> getQueues() {
		Array<Object> result = (Array<Object>) window.$get("queues");
		BiConsumer<Consumer<Array<Object>>, Consumer<Object>> consu = new BiConsumer<Consumer<Array<Object>>, Consumer<Object>>() {
			public void accept(Consumer<Array<Object>> t, Consumer<Object> u) {
				t.accept(result);
			}
		};

		return new Promise(consu);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Promise<Array<Object>> getUsers(String txt) {
		Array<Object> results = (Array<Object>) window.$get("users");
		Array<Object> result = new Array<Object>();

		for (Object res : results) {
			if (txt != null && txt.length() > 0) {
				if (((String) res.$get("label")).toLowerCase().contains(txt.toLowerCase())) {
					if (result.length < 5)
						result.push(res);
				}
			} else {
				if (result.length < 5)
					result.push(res);
			}
		}
		BiConsumer<Consumer<Array<Object>>, Consumer<Object>> consu = new BiConsumer<Consumer<Array<Object>>, Consumer<Object>>() {
			public void accept(Consumer<Array<Object>> t, Consumer<Object> u) {
				t.accept(result);
			}
		};

		return new Promise(consu);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Promise<Array<Object>> getFieldValues(String fieldName, String txt, Integer page, String objectType,
			String filterId) {
		Array<Object> result = (Array<Object>) window.$get("cases");

		for (Object o : result) {
			o.$set("value", o.$get(fieldName));
			o.$set("label", o.$get(fieldName));
		}

		BiConsumer<Consumer<Array<Object>>, Consumer<Object>> consu = new BiConsumer<Consumer<Array<Object>>, Consumer<Object>>() {
			public void accept(Consumer<Array<Object>> t, Consumer<Object> u) {
				t.accept(result);
			}
		};

		return new Promise(consu);

	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Promise<DateTimeTree> getFieldDateTimeTree(String fieldName, String objectType) {
		Date dt = new Date();
		DateTimeTree result = new DateTimeTree();
		result.addDate(dt);
		for (Integer i = 0; i < 20; i++) {
			Date tmp = new Date(dt.getTime() + i * 20000 * 60 * 60);
			result.addDate(tmp);
		}

		BiConsumer<Consumer<DateTimeTree>, Consumer<Object>> consu = new BiConsumer<Consumer<DateTimeTree>, Consumer<Object>>() {
			public void accept(Consumer<DateTimeTree> t, Consumer<Object> u) {
				t.accept(result);
			}
		};

		return new Promise(consu);

	}

	@Override
	public Promise<String> getBranches() {
		// TODO Auto-generated method stub
		return null;
	}

}
