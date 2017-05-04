package org.nr.backmir.guide.service;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by NightRunner on 2016-12-09.
 */
@Component
public class JsonServiceFastJsonImpl implements JsonService {

    @Override
    public String toJson(Object object) {
        return JSONObject.toJSON(object).toString();
    }

    @Override
    public Object parseObject(String jsonString) {
        return JSONObject.parse(jsonString);
    }

    @Override
    public <T> T parseObject(String jsonString, Class<T> clazz) {
        return JSONObject.parseObject(jsonString, clazz);
    }

    @Override
    public <T> List<T> parseArray(String jsonString, Class<T> clazz) {
        return JSONObject.parseArray(jsonString, clazz);
    }
}
