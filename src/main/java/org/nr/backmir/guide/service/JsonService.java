package org.nr.backmir.guide.service;

import java.util.List;

public interface JsonService {
    String toJson(Object object);

    Object parseObject(String jsonString);

    <T> T parseObject(String jsonString, Class<T> clazz);

    <T> List<T> parseArray(String jsonString, Class<T> clazz);
}
